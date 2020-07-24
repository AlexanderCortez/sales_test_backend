import { IApiResponse } from '@core/interfaces/api-response.interface';
import { Sale } from '@sale/docs/sale.doc';

export class SimpleSaleResponse implements IApiResponse<Sale> {
  data: Sale;
}
