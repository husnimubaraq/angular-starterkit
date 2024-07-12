import {Injectable} from '@angular/core';
import { TProduct } from 'features/public/product'

@Injectable({
  providedIn: 'root',
})
export class ProductBuyService {
  data: TProduct | null = null;

  getData(): TProduct {
    return this.data as TProduct
  }
}
