import { Request, Response, NextFunction } from "express";
import { getRepository, createQueryBuilder } from "typeorm";

import { User } from "../entity/User";

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //Get the user ID from previous midleware
    const id = res.locals.jwtPayload.userId;

    //Get user role from the database
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (id) {
      res.status(401).send();
    }

    //Check if array of authorized roles includes the user's role
    //get the role of that user from database by inner join (it will give us the user object and inside the role attribut the whole object with name... )
    const userFromBase = await getRepository(User)
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.role", "role")
      .where("user.userId = :idUser", { idUser: id })
      .getOne();
      //check if the role of that user is one of the roles passed inside the array  (roles)
    if (roles.indexOf(userFromBase.role.roleName) > -1) next();
    else res.status(401).send();
  };
};
