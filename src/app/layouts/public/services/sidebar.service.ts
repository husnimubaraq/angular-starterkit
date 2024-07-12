import {Injectable} from '@angular/core';
import { InstanceOptions, Modal, ModalInterface, ModalOptions } from 'flowbite';

@Injectable({
  providedIn: 'root',
})
export class SideBarService {
  show: boolean = false;

  modal: ModalInterface | null = null

  openModal(){
    const $modalElement: HTMLElement | null = document.querySelector('#modalSideBar');

    const modalOptions: ModalOptions = {
        backdrop: 'dynamic',
        backdropClasses:
            'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40 mx-auto max-w-screen-sm',
        closable: true,
        onHide: () => {
            console.log('modal is hidden');
        },
        onShow: () => {
            console.log('modal is shown');
        },
        onToggle: () => {
            console.log('modal has been toggled');
        },
    };

    const instanceOptions: InstanceOptions = {
      id: 'modalSideBar',
      override: true
    };

    this.modal = new Modal($modalElement, modalOptions, instanceOptions);

    this.modal.show()
  }

  closeModal(){
    this.modal?.hide()
  }
}
