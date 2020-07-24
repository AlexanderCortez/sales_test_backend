import {MigrationInterface, QueryRunner} from "typeorm";

export class SalesOrderItem1595549306396 implements MigrationInterface {
    name = 'SalesOrderItem1595549306396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sale_order_item" ("id" int NOT NULL IDENTITY(1,1), "quantity" int NOT NULL, "price" int NOT NULL, "saleorderId" int, "itemId" int, CONSTRAINT "PK_a693b37099d9587f2c808669348" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sale_order_item" ADD CONSTRAINT "FK_9fde193bdcf7628d4f573e0ed0b" FOREIGN KEY ("saleorderId") REFERENCES "sales_order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale_order_item" ADD CONSTRAINT "FK_21a55118c1161d1b90b90f7b32c" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale_order_item" DROP CONSTRAINT "FK_21a55118c1161d1b90b90f7b32c"`);
        await queryRunner.query(`ALTER TABLE "sale_order_item" DROP CONSTRAINT "FK_9fde193bdcf7628d4f573e0ed0b"`);
        await queryRunner.query(`DROP TABLE "sale_order_item"`);
    }

}
