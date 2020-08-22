// import {
//   MigrationInterface,
//   QueryRunner,
//   getRepository,
//   Connection,
// } from "typeorm";
// import { User } from "../entity/User";
// import { F_comptet } from "../entity/F_comptet";
// import { Role } from "../entity/Role";
// import { plainToClass } from "class-transformer";
// export class CreateAdminUser1597317354400 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     //adding role admin
//     let role = new Role();
//     role.roleName = "ADMIN";
//     const roleRepository = getRepository(Role);
//     roleRepository.save(role);

//     let user = new User();
//     user.username = "admin";
//     user.userPassword = "admin";
//     user.userFirstName = "Hamza";
//     user.userLastName = "aziz";
//     user.role = role;
//     user.f_compte = plainToClass(
//       F_comptet,
//       getRepository(F_comptet).find({ where: { compteIntitule: "google" } })
//     );
//     user.hashPassword();
//     const userRepository = getRepository(User);
//     await userRepository.save(user);
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {}
// }
