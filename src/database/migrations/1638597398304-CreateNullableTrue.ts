import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateNullableTrue1638597398304 implements MigrationInterface {
    name = 'CreateNullableTrue1638597398304'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "likes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "gostou" boolean NOT NULL DEFAULT true, "userId" uuid, "classId" uuid, CONSTRAINT "REL_23f4aa263648eec99de6c2ba43" UNIQUE ("classId"), CONSTRAINT "PK_a9323de3f8bced7539a794b4a37" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "UQ_1f3940af28a76098f31004f03ca"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "strength"`);
        await queryRunner.query(`ALTER TABLE "classes" ADD "strength" integer DEFAULT '5'`);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "vitality"`);
        await queryRunner.query(`ALTER TABLE "classes" ADD "vitality" integer NOT NULL DEFAULT '5'`);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "dexterity"`);
        await queryRunner.query(`ALTER TABLE "classes" ADD "dexterity" integer NOT NULL DEFAULT '5'`);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "inteligence"`);
        await queryRunner.query(`ALTER TABLE "classes" ADD "inteligence" integer NOT NULL DEFAULT '5'`);
        await queryRunner.query(`ALTER TABLE "classes" ALTER COLUMN "picture" SET DEFAULT '5'`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "likes" ADD CONSTRAINT "FK_cfd8e81fac09d7339a32e57d904" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "likes" ADD CONSTRAINT "FK_23f4aa263648eec99de6c2ba430" FOREIGN KEY ("classId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "likes" DROP CONSTRAINT "FK_23f4aa263648eec99de6c2ba430"`);
        await queryRunner.query(`ALTER TABLE "likes" DROP CONSTRAINT "FK_cfd8e81fac09d7339a32e57d904"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "classes" ALTER COLUMN "picture" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "inteligence"`);
        await queryRunner.query(`ALTER TABLE "classes" ADD "inteligence" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "dexterity"`);
        await queryRunner.query(`ALTER TABLE "classes" ADD "dexterity" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "vitality"`);
        await queryRunner.query(`ALTER TABLE "classes" ADD "vitality" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "strength"`);
        await queryRunner.query(`ALTER TABLE "classes" ADD "strength" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "UQ_1f3940af28a76098f31004f03ca" UNIQUE ("name")`);
        await queryRunner.query(`DROP TABLE "likes"`);
    }

}
