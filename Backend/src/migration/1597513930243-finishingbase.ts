import {MigrationInterface, QueryRunner} from "typeorm";

export class finishingbase1597513930243 implements MigrationInterface {
    name = 'finishingbase1597513930243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "f_comptet" ("compteIntitule" nvarchar(255) NOT NULL, "compteNum" nvarchar(255) NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_ef60b4db3793bd22e77a7530ef3" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_d9dc42644208a188b4470c5024d" DEFAULT getdate(), CONSTRAINT "UQ_5817e356e90de41470d9bd78d27" UNIQUE ("compteNum"), CONSTRAINT "PK_5817e356e90de41470d9bd78d27" PRIMARY KEY ("compteNum"))`);
        await queryRunner.query(`CREATE TABLE "f_docentite" ("docentiteId" int NOT NULL IDENTITY(1,1), "quantite" int NOT NULL, "prixTotal" int NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_9d78917330010f8331d5eb5f87d" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_b7c8d75986638c13f0b98725f36" DEFAULT getdate(), "fDocligneDocligneId" int, "fArticleArticleId" int, CONSTRAINT "UQ_0629de8d7ae30bf744107ada753" UNIQUE ("docentiteId"), CONSTRAINT "PK_0629de8d7ae30bf744107ada753" PRIMARY KEY ("docentiteId"))`);
        await queryRunner.query(`CREATE TABLE "f_docligne" ("docligneId" int NOT NULL IDENTITY(1,1), "docligneNumero" nvarchar(255) NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_195917a415bc48b5bfc6f2349a8" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_61ae2cdda2e8038f0131913478e" DEFAULT getdate(), "userUserId" int, CONSTRAINT "UQ_305d2d04f6126a10e66eeb6b9f6" UNIQUE ("docligneId"), CONSTRAINT "PK_305d2d04f6126a10e66eeb6b9f6" PRIMARY KEY ("docligneId"))`);
        await queryRunner.query(`CREATE TABLE "f_article" ("articleId" int NOT NULL IDENTITY(1,1), "articleName" nvarchar(255) NOT NULL, "articlePhoto" nvarchar(255) NOT NULL, "articleDescription" nvarchar(255) NOT NULL, "articleRef" nvarchar(255) NOT NULL, "articlePrice" int NOT NULL, "articleCodeBare" nvarchar(255) NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_16ec287c7cc98cb35afc242b312" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_0eb659a974afa66570865e862ec" DEFAULT getdate(), "userUserId" int, CONSTRAINT "UQ_ecc7d153f93331a06a16fceda66" UNIQUE ("articleId"), CONSTRAINT "PK_ecc7d153f93331a06a16fceda66" PRIMARY KEY ("articleId"))`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "userId" int NOT NULL IDENTITY(1,1)`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("userId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD "userPassword" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "userPhoto" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "userFirstName" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "userLastName" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "positionLatitude" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "positionLangitude" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "fCompteCompteNum" nvarchar(255)`);
        await queryRunner.query(`ALTER TABLE "f_docentite" ADD CONSTRAINT "FK_3a4b9f5b1cb9aed7d83b14c888d" FOREIGN KEY ("fDocligneDocligneId") REFERENCES "f_docligne"("docligneId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "f_docentite" ADD CONSTRAINT "FK_1991d5eddc4990bbe65cac18c2f" FOREIGN KEY ("fArticleArticleId") REFERENCES "f_article"("articleId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "f_docligne" ADD CONSTRAINT "FK_1913e37ae2757dab0b0a935bef0" FOREIGN KEY ("userUserId") REFERENCES "user"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_3debb73507f24de29b824875b8a" FOREIGN KEY ("fCompteCompteNum") REFERENCES "f_comptet"("compteNum") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "f_article" ADD CONSTRAINT "FK_8d2234a6fc07408dd4a6020b4e4" FOREIGN KEY ("userUserId") REFERENCES "user"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "f_article" DROP CONSTRAINT "FK_8d2234a6fc07408dd4a6020b4e4"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_3debb73507f24de29b824875b8a"`);
        await queryRunner.query(`ALTER TABLE "f_docligne" DROP CONSTRAINT "FK_1913e37ae2757dab0b0a935bef0"`);
        await queryRunner.query(`ALTER TABLE "f_docentite" DROP CONSTRAINT "FK_1991d5eddc4990bbe65cac18c2f"`);
        await queryRunner.query(`ALTER TABLE "f_docentite" DROP CONSTRAINT "FK_3a4b9f5b1cb9aed7d83b14c888d"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "fCompteCompteNum"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "positionLangitude"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "positionLatitude"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "userLastName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "userFirstName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "userPhoto"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "userPassword"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_d72ea127f30e21753c9e229891e"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" int NOT NULL IDENTITY(1,1)`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP TABLE "f_article"`);
        await queryRunner.query(`DROP TABLE "f_docligne"`);
        await queryRunner.query(`DROP TABLE "f_docentite"`);
        await queryRunner.query(`DROP TABLE "f_comptet"`);
    }

}
