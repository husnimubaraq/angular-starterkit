import {Injectable} from '@angular/core';
import { serviceCategories } from 'features/public/service'
import { InstanceOptions, Modal, ModalInterface, ModalOptions } from 'flowbite';

@Injectable({
  providedIn: 'root',
})
export class ServiceCategoryService {
  currentId: number = serviceCategories[0].id;

  getCurrentId(): number {
    return this.currentId
  }
}
