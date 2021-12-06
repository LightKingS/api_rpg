import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClassTable1638506376029 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

        await queryRunner.createTable(new Table ({
            name: 'classes',
            columns: [
                {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()'
            },
            {
                name: 'name',
                type: 'varchar',
                isUnique: true,

            },
            {
                name: "strength",
                type: "varchar"
            },
            {
                name: "vitality",
                type: "varchar"
            },
            {
                name: "dexterity",
                type: "varchar"
            },
            {
                name: "inteligence",
                type: "varchar"
            },
            {
                name: "picture",
                type: "varchar"
            },
        ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('classes')
        await queryRunner.query('DROP EXTENSION "uuid-ossp"')
    }

}
