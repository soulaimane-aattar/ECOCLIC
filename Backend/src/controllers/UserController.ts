import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { User } from "../entity/User";
import { Role } from "../entity/Role";

export class UserController {
  static listAll = async (req: Request, res: Response) => {
    const users = await getRepository(User)
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.f_compte", "fcompte")
      .leftJoinAndSelect("user.role", "role")
      .select([
        "userId",
        "username",
        "userFirstName",
        "userLastName",
        "user.createdAt",
        "user.updatedAt",
        "compteIntitule",
        "compteNum",
        "userPhoto",
        "roleName",
        "roleId",
      ])
      .getRawMany();

    //Send the users object
    res.send(users);
    console.log("users se");
  };

  static getOneById = async (req: Request, res: Response) => {
    //Get the ID from the url
    const id: number = +req.params.id;
    //Get the user from database
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id, {
        select: [
          "userId",
          "username",
          "role",
          "userFirstName",
          "userLastName",
          "updatedAt",
          "createdAt",
        ], //We dont want to send the password on response
      });
    } catch (error) {
      res.status(404);
      res.send("User not found");
    }
    res.send(user);
  };

  static newUser = async (req: Request, res: Response) => {
    //Get parameters from the body
    let {
      username,
      password,
      role,
      userFirstName,
      userLastName,
      societe,
    } = req.body;

    let user = new User();
    user.username = username;
    user.userPassword = password;
    user.positionLangitude = "88015122";
    user.positionLatitude = "54845102";
    user.userPhoto = "6hjhjhh.png";
    user.userLastName = userLastName;
    user.userFirstName = userFirstName;
    (user.f_compte = societe), (user.role = role);

    //Validade if the parameters are ok
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }

    //Hash the password, to securely store on DB
    user.hashPassword();

    //Try to save. If fails, the username is already in use
    const userRepository = getRepository(User);
    try {
      await userRepository.save(user);
    } catch (e) {
      res.status(409).send("username deja utilise");
      return;
    }

    //If all ok, send 201 response
    res.send("client ajoute avec succes");
  };
  /*************************************************************************edit user****************** */
  static editUser = async (req: Request, res: Response) => {
    //Get the ID from the url
    const id = req.params.id;

    //Get values from the body
    const {
      username,
      role,
      userFirstName,
      userLastName,
      userPassword,
      societe,
    } = req.body;

    //Try to find user on database
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      //If not found, send a 404 response
      res.status(404).send("User not found");

      return;
    }

    //Validate the new values on model

    user.username = username;
    user.role = role;
    user.userFirstName = userFirstName;
    user.userLastName = userLastName;
    user.f_compte = societe;
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send("reesayer");
      return;
    }

    //Try to safe, if fails, that means username already in use
    try {
      await userRepository.save(user);
    } catch (e) {
      res.status(409).send("nom d'utilisateur déja utilisé");
      return;
    }
    //After all send a 204 (no content, but accepted) response
    res.send("client modifié avec succée");
  };

  static deleteUser = async (req: Request, res: Response) => {
    //Get the ID from the url
    const id = +req.params.id;
    console.log("id : " + id);

    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail({ userId: id });
    } catch (error) {
      console.log("probleme in ");
      res.status(404);
      res.send("utilisateur non trouvé");
      return;
    }
    userRepository.delete(id);

    //After all send a 204 (no content, but accepted) response
    res.status(204).send();
  };

  static getRoles = async (req: Request, res: Response) => {
    let roles;
    try {
      roles = await getRepository(Role).find({
        select: ["roleId", "roleName"],
      });
      res.send(roles);
    } catch (error) {
      res.status(401).send("essayer une autre fois");
    }
  };
}
