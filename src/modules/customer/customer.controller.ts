import { Controller, Get, Post, Body, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from '@customer/customer.service';
import { CustomersResponse } from '@customer/docs/customers-response.doc';
import { CustomerDTO } from '@customer/dtos/customer.dto';
import { SimpleCustomerResponse } from '@customer/docs/simple-customer-response.doc';

@Controller('customers')
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  async getAll(): Promise<CustomersResponse> {
    const customers = await this.customerService.fetchAll();
    return {
      data: customers,
    };
  }

  @Post()
  async create(
    @Body()
    body: CustomerDTO,
  ): Promise<SimpleCustomerResponse> {
    const customer = await this.customerService.create(body);
    return { data: customer }
  }
}