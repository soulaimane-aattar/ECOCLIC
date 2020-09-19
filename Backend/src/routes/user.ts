import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

//Get all users
router.get("/", [checkJwt, checkRole(["ADMIN"])], UserController.listAll);

// Get one user
router.get(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  UserController.getOneById
);

//Create a new user
router.post("/creat", [checkJwt, checkRole(["ADMIN"])], UserController.newUser);

//Edit one user
router.patch(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  UserController.editUser
);

//Delete one user
router.delete(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  UserController.deleteUser
);

router.get("/roles", [checkJwt, checkRole(["ADMIN"])], UserController.getRoles);
router.post(
  "/roles/add",
  [checkJwt, checkRole(["ADMIN"])],
  UserController.addRole
);
router.patch(
  "/roles/edit",
  [checkJwt, checkRole(["ADMIN"])],
  UserController.editRole
);
router.delete(
  "/roles/delete/:roleId([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  UserController.deletteRole
);
export default router;
