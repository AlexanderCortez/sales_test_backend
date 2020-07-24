import { IApiResponse } from '@core/interfaces/api-response.interface';
import { Customer } from '@customer/docs/customer.doc';

export class CustomersResponse implements IApiResponse<Customer[]> {
  data: Customer[];
}
