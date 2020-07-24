import { Module } from '@nestjs/common';
import { CustomerController } from '@customer/customer.controller';
import { CustomerService } from '@customer/customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from '@entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}