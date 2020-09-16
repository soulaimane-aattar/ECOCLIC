import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

import { companyController } from "../controllers/companyController";

const router = Router();

//Get all articles a specific user
router.get("/", [checkJwt], companyController.listAllCompanies);
router.post(
  "/add",
  [checkJwt, checkRole(["ADMIN"])],
  companyController.addCompany
);
router.patch(
  "/edit",
  [checkJwt, checkRole(["ADMIN"])],
  companyController.editCompany
);
router.delete(
  "/delete",
  [checkJwt, checkRole(["ADMIN"])],
  companyController.deletteCompany
);
export default router;
