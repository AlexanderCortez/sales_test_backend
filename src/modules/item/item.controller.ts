import { Controller, Get, Post, Body, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { ItemService } from '@item/item.service';
import { ItemDTO } from '@item/dtos/item-body.dto';
import { ApiTags } from '@nestjs/swagger';
import { ItemResponse } from '@item/docs/items-response.doc';
import { SimpleItemResponse } from '@item/docs/simple-item-response.doc';

@Controller('items')
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Get()
  async getItems(): Promise<ItemResponse> {
    const items = await this.itemService.fetchAll();
    return { data: items };
  }

  @Post()
  async create(
    @Body()
    body: ItemDTO,
  ): Promise<SimpleItemResponse> {
    const item = await this.itemService.create(body);
    return { data: item };
  }
}
