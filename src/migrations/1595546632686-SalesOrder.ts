import {MigrationInterface, QueryRunner} from "typeorm";

export class SalesOrder1595546632686 implements MigrationInterface {
    name = 'SalesOrder1595546632686'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sales_order" ("id" int NOT NULL IDENTITY(1,1), "cost" int NOT NULL, "customerId" int, CONSTRAINT "PK_1631a193003bfc4297c61ba38ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sales_order" ADD CONSTRAINT "FK_612bd402fcea2b72502a478a76d" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales_order" DROP CONSTRAINT "FK_612bd402fcea2b72502a478a76d"`);
        await queryRunner.query(`DROP TABLE "sales_order"`);
    }

}
