import { Component, Input } from '@angular/core';
import { BarsIcon, BasketIcon, CrossIcon } from 'components/icons';
import { ButtonComponent } from 'components/base';
import { TProduct } from "features/public/product";
import { ServiceBuyService } from 'services/public';
import { SafeHtmlPipe } from 'utils';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'service-buy',
  standalone: true,
  imports: [
    BarsIcon,
    BasketIcon,
    CrossIcon,
    ButtonComponent,
    SafeHtmlPipe,
    CurrencyPipe,
  ],
  templateUrl: './service-buy.component.html'
})
export class ServiceBuy  {
  @Input() data: TProduct | null = null;

  constructor(private productService: ServiceBuyService) {
    this.data = this.productService.getData()
  }

  ngDoCheck(){
    this.data = this.productService.getData()
  }

  close() {

  }
}
