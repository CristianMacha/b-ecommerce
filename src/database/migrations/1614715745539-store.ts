import {MigrationInterface, QueryRunner} from "typeorm";

export class store1614715745539 implements MigrationInterface {
    name = 'store1614715745539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "store" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "owner" character varying NOT NULL, "address" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "ruc" character varying NOT NULL, "active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f3172007d4de5ae8e7692759d79" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "store"`);
    }

}
