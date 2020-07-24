import { Expose } from 'class-transformer';

export class Customer {
  @Expose()
  id: number;

  @Expose()
  name: string;
}