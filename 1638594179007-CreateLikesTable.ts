import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLikesTable1638594179007 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
            name: 'likes',
            columns: [
                {
                name: 'userId',
                type: 'uuid',
                isPrimary: true,
            },
            {
                name: 'classId',
                type: 'varchar',
            },
            {
                name: "gostou",
                type: "boolean"
            }
        ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('likes')
    }

}
