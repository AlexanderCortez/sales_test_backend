import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, Min, IsNotEmpty, IsArray, IsInt, ValidateNested } from 'class-validator';
import { OrderItemDTO } from '@sale/dtos/order-item.dto';

export class SaleDTO {
  @ApiProperty()
  @IsNumber()
  @Min(0.01)
  cost: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  customer: number;
  
  @IsNotEmpty()
  @IsArray()
  @ValidateNested()
  @Type(() => OrderItemDTO)
  saleorderitems: OrderItemDTO[];
}