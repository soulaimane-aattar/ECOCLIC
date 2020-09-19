import { Response, request, Request } from "express";
import { getRepository, createQueryBuilder } from "typeorm";
import { F_comptet } from "../entity/F_comptet";
import { validate } from "class-validator";

export class companyController {
  static listAllCompanies = async (req: Request, res: Response) => {
    let companies;
    try {
      companies = await getRepository(F_comptet).find({
        select: ["compteIntitule", "compteNum"],
      });
      res.send(companies);
    } catch (error) {
      res.status(401).send("essayer une autre fois");
    }
  };
  static addCompany = async (req: Request, res: Response) => {
    console.log("je suis company appele");
    let { compteIntitule, compteNum } = req.body;
    let company = new F_comptet();
    company.compteIntitule = compteIntitule;
    company.compteNum = compteNum;
    // const errors = await validate(company);
    // if (errors.length > 0) {
    //   console.log(errors);
    //   res.status(400).send(errors);
    //   return;
    // }

    let companyRepository = getRepository(F_comptet);
    let test = companyRepository.find({
      where: {
        compteNum: company.compteNum,
      },
    });
    if ((await test).length > 0) {
      res.status(409).send("numero de compte déja utilisé");
    } else {
      companyRepository.save(company);
      res.send("compte ajouté avec succée");
    }
  };
  static editCompany = async (req: Request, res: Response) => {
    let { compteIntitule, compteNum } = req.body;
    let company = new F_comptet();

    let companyRepository = getRepository(F_comptet);
    try {
      company = await companyRepository.findOneOrFail({ compteNum: compteNum });
    } catch (e) {
      res.status(409).send("compte non trouvé");
      return;
    }
    company.compteIntitule = compteIntitule;

    try {
      await companyRepository.save(company);
    } catch (e) {
      res.status(409).send("un problème de modification");
    }
    res.send("Company modifié avec succées");
    return;
  };

  static deletteCompany = async (req: Request, res: Response) => {
    const compteNum = req.params.compteNum;
    let Company = new F_comptet();
    const companyRepository = getRepository(F_comptet);
    try {
      Company = await companyRepository.findOneOrFail({ compteNum: compteNum });
    } catch (e) {
      res.status(404).send("Company non trouvé");
    }
    companyRepository.delete({ compteNum: compteNum });
    res.send("compte supprimé avec succée");
  };
}
