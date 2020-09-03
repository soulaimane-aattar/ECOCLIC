import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";
import { CommandesController } from "../controllers/CommandesController";

const router = Router();

router.post("/new", [checkJwt], CommandesController.newCommande);
router.get("/", [checkJwt], CommandesController.getUserCommandes);

export default router;
