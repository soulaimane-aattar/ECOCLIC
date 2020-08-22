import {MigrationInterface, QueryRunner} from "typeorm";

export class addingRoletable1597664797070 implements MigrationInterface {
    name = 'addingRoletable1597664797070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`EXEC sp_rename "user.role", "roleRoleId"`);
        await queryRunner.query(`CREATE TABLE "role" ("roleId" int NOT NULL IDENTITY(1,1), "roleName" nvarchar(255) NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_3c39bd046f5e69d37f0e4fe7688" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_824e186a844b0ca85bb8e6a14e5" DEFAULT getdate(), CONSTRAINT "UQ_a6142dcc61f5f3fb2d6899fa264" UNIQUE ("roleName"), CONSTRAINT "PK_703705ba862c2bb45250962c9e1" PRIMARY KEY ("roleId"))`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "roleRoleId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "roleRoleId" int`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_ffe3092db843bd8f90fcfe97da7" FOREIGN KEY ("roleRoleId") REFERENCES "role"("roleId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_ffe3092db843bd8f90fcfe97da7"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "roleRoleId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "roleRoleId" nvarchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`EXEC sp_rename "user.roleRoleId", "role"`);
    }

}
