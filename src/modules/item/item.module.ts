import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/entities/item.entity';
import { ItemController } from '@item/item.controller';
import { ItemService } from '@item/item.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item])
  ],
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule {

}