import {MigrationInterface, QueryRunner} from "typeorm";

export class personRoleNullable1614696870963 implements MigrationInterface {
    name = 'personRoleNullable1614696870963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_8c252b7bfff409f0c040c8ac8d9"`);
        await queryRunner.query(`ALTER TABLE "person" ALTER COLUMN "roleId" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "person"."roleId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_8c252b7bfff409f0c040c8ac8d9" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_8c252b7bfff409f0c040c8ac8d9"`);
        await queryRunner.query(`COMMENT ON COLUMN "person"."roleId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "person" ALTER COLUMN "roleId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_8c252b7bfff409f0c040c8ac8d9" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
