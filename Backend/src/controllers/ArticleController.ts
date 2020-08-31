import { Response, request, Request } from "express";
import { getRepository, createQueryBuilder } from "typeorm";
import { validate } from "class-validator";
import { User } from "../entity/User";
import { F_article } from "../entity/F_article";

export class ArticleController {
  /******************************************************************** get all article in data base********************************************************************/

  static listAllArticles = async (req: Request, res: Response) => {
    const articles = await getRepository(F_article).find({
      select: [
        "articleId",
        "articleName",
        "articlePhoto",
        "articlePrice",
        "articleDescription",
      ],
    });

    res.send(articles);
  };
  /******************************************************************** get article for a specific user********************************************************************/
  static getArticleForUser = async (req: Request, res: Response) => {
    //get the id of the user from the jwt
    const idUser: number = res.locals.jwtPayload.userId;

    const articles = await getRepository(F_article).find({
      select: [
        "articleId",
        "articleName",
        "articlePhoto",
        "articlePrice",
        "articleDescription",
      ],
      where: [{ user: idUser }],
    });
    // to remove trow erreur in App 
    if (Object.keys(articles).length == 0) {
      res.send("il y'a aucun article lier à votre compte");
    }
    res.send(articles);
  };

  /*************************************************************************************** delete an article*************************************************/

  static deleteArticle = async (req: Request, res: Response) => {
    //get the id of article from the url
    const idArticle: number = +req.params.id;

    const articleRepository = getRepository(F_article);
    try {
      await articleRepository.findOneOrFail(idArticle);
    } catch (error) {
      res.status(404).send("article non trouvé");
      return;
    }
    articleRepository.delete(idArticle);

    //After all send a 204 (no content, but accepted) response
    res.status(204).send();
  };
  //   static addArticle = async (req:Request, res:Response){

  //   }

  /******************************************************************** edit article information********************************************************************/
  static editArticle = async (req: Request, res: Response) => {
    const idArticle: number = +req.params.id;
  };
}
