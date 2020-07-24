import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Min, IsNumber } from 'class-validator';

export class OrderItemDTO {
  @IsNotEmpty()
  @Min(1)
  quantity: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @Min(0.01)
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @Min(1)
  item: number;
}