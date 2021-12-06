import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class UpdateClassTable1638592968459 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("classes", new TableColumn({
            name: "likes",
            type: "int",
            default: 0
        }));
        await queryRunner.addColumn("classes", new TableColumn({
            name: "dislikes",
            type: "int",
            default: 0
        }));
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("classes", "dislikes");
        await queryRunner.dropColumn("classes", "likes");
    }

}
