import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

import { ArticleController } from "../controllers/ArticleController";

const router = Router();

//Get all articles a specific user
router.get("/", [checkJwt], ArticleController.listAllArticles);
router.get("/my_article", [checkJwt], ArticleController.getArticleForUser);
router.delete(
  "/delete/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  ArticleController.deleteArticle
);

export default router;
