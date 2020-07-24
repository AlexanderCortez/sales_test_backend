import { Expose, Type } from 'class-transformer';
import { Customer } from '@customer/docs/customer.doc';
import { OrderItem } from '@sale/docs/order-item.doc';

export class Sale {
  @Expose()
  id: number;

  @Expose()
  cost: number;

  @Type(() => Customer)
  customer: Customer;

  @Type(() => OrderItem)
  saleorderitems: OrderItem[];
}