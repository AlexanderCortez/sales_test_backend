import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { SalesOrder } from '@entities/saleorder.entity';
import { Item } from '@entities/item.entity';

@Entity()
export class SaleOrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @ManyToOne(() => SalesOrder)
  saleorder: SalesOrder

  @ManyToOne(() => Item)
  item: Item
}