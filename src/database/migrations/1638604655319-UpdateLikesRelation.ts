import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateLikesRelation1638604655319 implements MigrationInterface {
    name = 'UpdateLikesRelation1638604655319'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "likes" DROP CONSTRAINT "FK_23f4aa263648eec99de6c2ba430"`);
        await queryRunner.query(`ALTER TABLE "likes" ADD "classeId" uuid`);
        await queryRunner.query(`ALTER TABLE "likes" DROP CONSTRAINT "REL_23f4aa263648eec99de6c2ba43"`);
        await queryRunner.query(`ALTER TABLE "likes" DROP COLUMN "classId"`);
        await queryRunner.query(`ALTER TABLE "likes" ADD "classId" character varying`);
        await queryRunner.query(`ALTER TABLE "likes" ADD CONSTRAINT "FK_01d9c66cd4423049a93b21d148f" FOREIGN KEY ("classeId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "likes" DROP CONSTRAINT "FK_01d9c66cd4423049a93b21d148f"`);
        await queryRunner.query(`ALTER TABLE "likes" DROP COLUMN "classId"`);
        await queryRunner.query(`ALTER TABLE "likes" ADD "classId" uuid`);
        await queryRunner.query(`ALTER TABLE "likes" ADD CONSTRAINT "REL_23f4aa263648eec99de6c2ba43" UNIQUE ("classId")`);
        await queryRunner.query(`ALTER TABLE "likes" DROP COLUMN "classeId"`);
        await queryRunner.query(`ALTER TABLE "likes" ADD CONSTRAINT "FK_23f4aa263648eec99de6c2ba430" FOREIGN KEY ("classId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
