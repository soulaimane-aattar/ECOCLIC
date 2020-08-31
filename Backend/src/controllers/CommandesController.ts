import { Request, Response } from "express";
import { getRepository, createQueryBuilder } from "typeorm";
import { F_docentite } from "../entity/F_docentete";
import { F_docligne } from "../entity/F_docligne";
import { F_article } from "../entity/F_article";
import { getConnection } from "typeorm";

export class CommandesController {
  static newCommande = async (req: Request, res: Response) => {
    let { products } = req.body;
    console.log("jwtPayload", res.locals.jwtPayload.userId);
    //console.log(req.body);
    console.log(products);
    if (!products) {
      res.status(400).send();
    }
    let docentiteRepo = getRepository(F_docentite);
    let docligneRepo = getRepository(F_docligne);

    let prixTotal = products.reduce(
      (a, b) => a + b.articlePrice * b.quantity,
      0
    );
    // creat  commande entete
    let docentete = new F_docentite();
    docentete.prixTotal = prixTotal;
    docentete.quantite = products.length;
    /* try {
      await docentiteRepo.save(docentete);
    } catch (e) {
      console.log("docentete", e);
      res.status(400).send(e);
    }*/

    // creat commande lines  with   the same  date  as  entete
    let doclines: [F_docligne] = products.map(async (p, idx) => {
      console.log("p", p);
      let docline = new F_docligne();
      docline.docligneNumero = `${idx}`;
      docline.f_docentite = docentete;
      return docline;
    });

    console.log(doclines);
    await getConnection().transaction(async (transactionalEntityManager) => {
      try {
        await docentiteRepo.save(docentete);
        await docligneRepo.save(doclines);
      } catch (e) {
        console.log("docline", e);
        res.status(400).send(e);
      }
    });

    res.status(202).send();
  };
}
