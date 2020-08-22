import { MigrationInterface, QueryRunner } from "typeorm";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { F_comptet } from "../entity/F_comptet";
import { Role } from "../entity/Role";
import { plainToClass } from "class-transformer";
export class addAdmin1597669919664 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //adding role admin

    let user = new User();
    user.username = "admin";
    user.userPassword = "admin";
    user.userFirstName = "Hamza";
    user.userLastName = "aziz";
    user.userPhoto = "ahhhaahaha.png";
    user.positionLangitude = "444544554";
    user.positionLatitude = "549848456";

    //get role

    user.role = await getRepository(Role)
      .createQueryBuilder("role")
      .where("role.roleId = :id", { id: 1 })
      .getOne();
    user.f_compte = plainToClass(
      F_comptet,
      getRepository(F_comptet).find({ where: { compteIntitule: "google" } })
    );
    user.hashPassword();
    const userRepository = getRepository(User);
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
