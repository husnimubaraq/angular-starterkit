import { Component, Input } from '@angular/core';
import { BarsIcon, SearchIcon } from 'components/icons';
import { TProduct } from "features/public/product";
import { ServiceBuy } from "features/public/service/components/service-buy/service-buy.component";
import { SafeHtmlPipe } from 'utils';
import { ServiceBuyService } from 'services/public';
import { CurrencyPipe } from '@angular/common';
import { Modal } from 'flowbite';
import type { ModalOptions, ModalInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

@Component({
  selector: 'service-item',
  standalone: true,
  imports: [
    BarsIcon,
    SearchIcon,
    SafeHtmlPipe,
    CurrencyPipe,
    ServiceBuy
  ],
  templateUrl: './service-item.component.html',
})
export class ServiceItem {
  @Input() data: TProduct | null = null;

  isOpen: boolean = false;

  constructor(private productService: ServiceBuyService) {

  }

  onPressItem() {
    if (this.data) {
      this.productService.data = this.data;

      const $modalElement: HTMLElement | null = document.querySelector('#modalServiceBuy');

      const modalOptions: ModalOptions = {
        placement: 'bottom-center',
        backdrop: 'dynamic',
        backdropClasses:
          'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40 mx-auto max-w-screen-sm backdrop-blur-xl',
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

      // instance options object
      const instanceOptions: InstanceOptions = {
        id: 'modalServiceBuy',
        override: true
      };

      if($modalElement){
        const modal: ModalInterface = new Modal($modalElement, modalOptions, instanceOptions);

        modal.show();
      }
    }
  }
}
