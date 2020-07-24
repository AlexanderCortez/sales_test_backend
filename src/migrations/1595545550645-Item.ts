import {MigrationInterface, QueryRunner} from "typeorm";

export class Item1595545550645 implements MigrationInterface {
    name = 'Item1595545550645'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "price" int NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_c5b036dd322fd93235dd6cc9711" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_e151cc43edaf5ddb4ee7c9e9e96" DEFAULT getdate(), CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "item"`);
    }

}
