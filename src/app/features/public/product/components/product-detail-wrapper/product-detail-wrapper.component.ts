import { Component } from '@angular/core';
import { TProduct, productLists } from "features/public/product";
import { SafeHtmlPipe } from 'utils';
import { CurrencyPipe } from '@angular/common';
import { PublicLayout } from 'layouts/public';
import { ActivatedRoute } from '@angular/router';
import slugify from 'slugify';
import { BasketIcon, ChevronLeftIcon } from 'components/icons';
import { ProductBuy } from 'features/public/product/components/product-buy/product-buy.component'
import { ServiceBuyService } from 'services/public';
import { InstanceOptions, Modal, ModalOptions } from 'flowbite';

@Component({
  selector: 'product-detail-wrapper',
  standalone: true,
  imports: [
    SafeHtmlPipe,
    CurrencyPipe,
    PublicLayout,
    ChevronLeftIcon,
    BasketIcon,
    ProductBuy
  ],
  templateUrl: './product-detail-wrapper.component.html',
})
export class ProductDetailWrapper {

  data: TProduct | null = null;

  constructor(private route: ActivatedRoute, private productService: ServiceBuyService) { }

  ngOnInit() {
    const product = productLists.find(x => slugify(x.name, {
      lower: true
    }) === this.route.snapshot.params['slug'])

    if (product) {
      this.data = product
    }
  }

  onClickCart() {
    this.productService.data = this.data;

    const $modalElement: HTMLElement | null = document.querySelector('#modalProductBuy');

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
      id: 'modalProductBuy',
      override: true
    };

    const modal = new Modal($modalElement, modalOptions, instanceOptions);

    modal.show()
  }
}
