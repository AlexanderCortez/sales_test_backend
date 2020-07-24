import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesOrder } from 'src/entities/saleorder.entity';
import { SaleController } from '@sale/sale.controller';
import { SaleService } from '@sale/sale.service';
import { SaleOrderItem } from '@entities/sale-order-item.entity';
import { Customer } from '@entities/customer.entity';
import { Item } from '@entities/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalesOrder, SaleOrderItem, Customer, Item])],
  controllers: [SaleController],
  providers: [SaleService],
})
export class SaleModule {}