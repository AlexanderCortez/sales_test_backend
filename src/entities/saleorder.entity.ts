import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Customer } from '@entities/customer.entity';
import { SaleOrderItem } from '@entities/sale-order-item.entity';

@Entity()
export class SalesOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cost: number;

  @ManyToOne(() => Customer)
  customer: Customer;

  @OneToMany(() => SaleOrderItem, saleitem => saleitem.saleorder)
  saleorderitems: SaleOrderItem[];
}