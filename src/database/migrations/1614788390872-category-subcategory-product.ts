import {MigrationInterface, QueryRunner} from "typeorm";

export class categorySubcategoryProduct1614788390872 implements MigrationInterface {
    name = 'categorySubcategoryProduct1614788390872'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sub_category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying, "active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "categoryId" integer NOT NULL, CONSTRAINT "PK_59f4461923255f1ce7fc5e7423c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying, "active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD "subCategoryId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_463d24f6d4905c488bd509164e6" FOREIGN KEY ("subCategoryId") REFERENCES "sub_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sub_category" ADD CONSTRAINT "FK_51b8c0b349725210c4bd8b9b7a7" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sub_category" DROP CONSTRAINT "FK_51b8c0b349725210c4bd8b9b7a7"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_463d24f6d4905c488bd509164e6"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "subCategoryId"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "sub_category"`);
    }

}
