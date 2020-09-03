import { Request, Response } from "express";
import { getRepository, createQueryBuilder } from "typeorm";
import { F_docentete } from "../entity/F_docentete";
import { F_docligne } from "../entity/F_docligne";
import { F_article } from "../entity/F_article";
import { getConnection } from "typeorm";
import { User } from "../entity/User";

export class CommandesController {
  static newCommande = async (req: Request, res: Response) => {
    let { products } = req.body;
    let docentiteRepo = getRepository(F_docentete);
    let docligneRepo = getRepository(F_docligne);
    let articleRepo = getRepository(F_article);
    let UserRepo = getRepository(User);

    let userId: number = res.locals.jwtPayload.userId;

    if (!products) {
      res.status(400).send();
    }

    let prixTotal = products.reduce(
      (a, b) => a + b.articlePrice * b.quantity,
      0
    );
    // creat  commande entete
    let docentete = new F_docentete();
    docentete.prixTotal = prixTotal;
    docentete.quantite = products.length;
    let user = await UserRepo.findOne(userId);
    docentete.user = user;

    // creat commande lines  with   the same  date  as  entete
    console.log("products", products);
    let doclines = await Promise.all(
      products.map(async (p, idx) => {
        let docline: F_docligne = new F_docligne();
        docline.docligneNumero = `${idx}`;
        docline.f_docentete = docentete;
        docline.quantite = p.quantity;
        let article: F_article = await articleRepo.findOneOrFail(p.articleId);
        console.log("article", article, p.articleId);
        docline.f_article = article;
        return docline;
      })
    );

    try {
      await docentiteRepo.save(docentete);
      await docligneRepo.save(doclines);
    } catch (e) {
      console.log("docline", e);
      res.status(400).send(e);
    }

    res.status(202).send();
  };
}
