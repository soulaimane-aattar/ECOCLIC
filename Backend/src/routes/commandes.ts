import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";
import { CommandesController } from "../controllers/CommandesController";

const router = Router();

//Get all articles a specific user
//router.get("/", [checkJwt], ArticleController.getClientCommandes);

router.post("/new", [checkJwt], CommandesController.newCommande);

export default router;
