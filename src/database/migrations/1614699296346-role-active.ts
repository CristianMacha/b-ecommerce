import {MigrationInterface, QueryRunner} from "typeorm";

export class roleActive1614699296346 implements MigrationInterface {
    name = 'roleActive1614699296346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ADD "active" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" DROP COLUMN "active"`);
    }

}
