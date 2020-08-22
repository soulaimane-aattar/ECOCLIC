import {MigrationInterface, QueryRunner} from "typeorm";

export class updating1597516099348 implements MigrationInterface {
    name = 'updating1597516099348'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "f_comptet" ADD "F_compteId" int NOT NULL IDENTITY(1,1)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "f_comptet" DROP COLUMN "F_compteId"`);
    }

}
