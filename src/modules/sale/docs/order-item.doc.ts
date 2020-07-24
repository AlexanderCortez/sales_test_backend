import { Expose, Type } from 'class-transformer';
import { Item } from '@item/docs/item.doc';

export class OrderItem {
  @Expose()
  id: number;

  @Expose()
  quantity: number;

  @Expose()
  price: number;

  @Type(() => Item)
  item: Item;
}