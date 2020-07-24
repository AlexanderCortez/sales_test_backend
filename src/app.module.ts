import * as dotenv from 'dotenv';
dotenv.config();
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDatabaseConfig } from '@config/database';
import { ItemModule } from '@item/item.module';
import { SaleModule } from '@sale/sale.module';
import { CustomerModule } from '@customer/customer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(getDatabaseConfig()),
    ItemModule,
    SaleModule,
    CustomerModule,
  ],
})
export class AppModule {}