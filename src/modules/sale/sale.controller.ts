import { Controller, Get, Post, Body, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SaleService } from '@sale/sale.service';
import { SalesResponse } from '@sale/docs/sales-response.doc';
import { SimpleSaleResponse } from '@sale/docs/simple-sale-response.doc';
import { SaleDTO } from '@sale/dtos/sale.dto';

@Controller('sales')
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('sales')
export class SaleController {
  constructor(
    private saleService: SaleService,
  ) {}

  @Get()
  async getAll(): Promise<SalesResponse> {
    const sales = await this.saleService.fetchAll();
    return { data: sales };
  }

  @Post()
  async create(
    @Body()
    body: SaleDTO
  ): Promise<SimpleSaleResponse> {
    const sale = await this.saleService.create(body);
    return { data: sale };
  }
}