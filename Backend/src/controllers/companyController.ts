import { Response, request, Request } from "express";
import { getRepository, createQueryBuilder } from "typeorm";
import { F_comptet } from "../entity/F_comptet";

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
}
