import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Item } from 'src/entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemDTO } from './dtos/item-body.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>
  ) {};

  create(entries: ItemDTO): Promise<Item> {
    return this.itemRepository.save(entries);
  }

  fetchAll(): Promise<Item[]> {
    // return this.itemRepository.find();
    return this.itemRepository.find();
  }
}