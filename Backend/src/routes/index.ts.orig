import { Router, Request, Response } from "express";
import "reflect-metadata";
import auth from "./auth";
import user from "./user";
import article from "./article";
import company from "./company";
import commmandes from "./commandes";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/article", article);
routes.use("/company", company);

routes.use("/commmandes", commmandes);
export default routes;
