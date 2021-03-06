import { IApiResponse } from '@core/interfaces/api-response.interface';
import { Item } from '@item/docs/item.doc';

export class ItemResponse implements IApiResponse<Item[]> {
  data: Item[]
}