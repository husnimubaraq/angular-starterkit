import {Injectable} from '@angular/core';
import { serviceCategories } from 'features/public/service'
import { TProduct } from 'features/public/product'

@Injectable({
  providedIn: 'root',
})
export class ServiceBuyService {
  data: TProduct | null = null;

  getData(): TProduct {
    return this.data as TProduct
  }
}
