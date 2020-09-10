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
}
