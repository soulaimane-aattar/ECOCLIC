import {
  MigrationInterface,
  QueryRunner,
  getConnection,
  getRepository,
} from "typeorm";
import { Role } from "../entity/Role";
import { User } from "../entity/User";
import { F_comptet } from "../entity/F_comptet";

export class updateUser11597671343608 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //get the compte from database fpr mapping it to the user
    let compte = await getRepository(F_comptet)
      .createQueryBuilder("compte")
      .where("compte.F_compteId = :id", { id: 1 })
      .getOne();
    await getConnection()
      .createQueryBuilder()
      .update(User)
      .set({ f_compte: compte })
      .where("username =:name", { name: "admin" })
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
