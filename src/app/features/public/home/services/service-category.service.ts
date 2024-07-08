import {Injectable} from '@angular/core';
import { serviceCategories } from 'features/public/service'

@Injectable({
  providedIn: 'root',
})
export class ServiceCategoryService {
  currentId: number = serviceCategories[0].id;

  getCurrentId(): number {
    return this.currentId
  }
}
