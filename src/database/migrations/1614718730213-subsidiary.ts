import {MigrationInterface, QueryRunner} from "typeorm";

export class subsidiary1614718730213 implements MigrationInterface {
    name = 'subsidiary1614718730213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subsidiary" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "active" boolean NOT NULL DEFAULT true, "location" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "storeId" integer, CONSTRAINT "PK_fa9258079144978ccfcb18e32a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "subsidiary" ADD CONSTRAINT "FK_92aa951759cafe795849b871057" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subsidiary" DROP CONSTRAINT "FK_92aa951759cafe795849b871057"`);
        await queryRunner.query(`DROP TABLE "subsidiary"`);
    }

}
