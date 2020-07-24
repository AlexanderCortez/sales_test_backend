import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Customer } from '@entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerDTO } from '@customer/dtos/customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>
  ) {}

  fetchAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  create(entries: CustomerDTO): Promise<Customer> {
    return this.customerRepository.save(entries);
  }

  findById(id: number): Promise<Customer> {
    return this.customerRepository.findOne(id);
  }
}