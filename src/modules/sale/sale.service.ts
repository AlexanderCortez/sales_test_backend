import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesOrder } from 'src/entities/saleorder.entity';
import { Repository } from 'typeorm';
import { SaleOrderItem } from '@entities/sale-order-item.entity';
import { SaleDTO } from '@sale/dtos/sale.dto';
import { OrderItemDTO } from '@sale/dtos/order-item.dto';
import { Customer } from '@entities/customer.entity';
import { Item } from '@entities/item.entity';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(SalesOrder)
    private saleRepository: Repository<SalesOrder>,
    @InjectRepository(SaleOrderItem)
    private saleOrderItemRepository: Repository<SaleOrderItem>,
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    @InjectRepository(Item)
    private itemRepository: Repository<Item>
  )
  {}

  fetchAll(): Promise<SalesOrder[]> {
    return this.saleRepository.find({
      relations: ['customer', 'saleorderitems', 'saleorderitems.item'],
    });
  }

  async fetchMatchOrdersItems(
    orderItems: OrderItemDTO[],
  ): Promise<Item[]> {
    const itemIds = orderItems.map(({ item }) => item);
    try {
      const items = await Promise.all(
        itemIds.map(itemId => this.itemRepository.findOneOrFail(itemId)),
        );
        return items;
    } catch (err) {
      throw new UnprocessableEntityException({ message: err.message });
    }
  }

  async create(entries: SaleDTO): Promise<SalesOrder> {
    const customer = await this.customerRepository.findOne(entries.customer);
    if (!customer) {
      throw new UnprocessableEntityException({ message: 'Customer not found' });
    }

    const items = await this.fetchMatchOrdersItems(entries.saleorderitems);
    const orderItems = entries.saleorderitems.map(({ item, ...rest }) => ({
      ...rest,
      item: items.find(({ id}) => id === item )
    }));

    const saleOrderItems = await this.saleOrderItemRepository.save(orderItems);
    const saleOrder = await this.saleRepository.save({ cost: entries.cost, customer, saleorderitems: saleOrderItems });
    return saleOrder;
  }
}