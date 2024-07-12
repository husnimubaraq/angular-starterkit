import { Component, Input } from '@angular/core';
import { CrossIcon } from 'components/icons';
import { ButtonComponent } from 'components/base';
import { TProduct } from "features/public/product";
import { CurrencyPipe } from '@angular/common';
import { InputQuantity } from 'components/input-quantity/input-quantity.component';

@Component({
  selector: 'product-buy',
  standalone: true,
  imports: [
    CrossIcon,
    ButtonComponent,
    CurrencyPipe,
    InputQuantity
  ],
  templateUrl: './product-buy.component.html'
})
export class ProductBuy  {
  @Input() data: TProduct | null = null;
  quantity: number = 1;
  total: number = 0;

  ngOnInit(){
    if(this.data){
      this.total = Number(this.data.price_net) * this.quantity
    }
  }

  ngDoCheck(){
    if(this.data){
      this.total = Number(this.data.price_net) * this.quantity
    }
  }

  onPlus(){
    this.quantity = this.quantity + 1
  }

  onMinus(){
    if(this.quantity > 1){
      this.quantity = this.quantity - 1
    }
  }
}
