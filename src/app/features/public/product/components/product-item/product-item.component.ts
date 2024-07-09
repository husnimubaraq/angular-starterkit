import { Component, Input } from '@angular/core';
import { TProduct } from "features/public/product";
import { CurrencyPipe } from '@angular/common';
import { Slugify } from 'utils';
import { RouterLink, RouterLinkActive } from '@angular/router';
import slugify from 'slugify';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [
    CurrencyPipe,
    Slugify,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './product-item.component.html',
})
export class ProductItem {
  @Input() data: TProduct | null = null;

  routerLink: string = ""

  ngOnInit() {
    if(this.data){
      this.routerLink = `/product/${slugify(this.data?.name ?? "", {
        lower: true
      })}`
    }
  }

  onPressItem() {
    if (this.data) {

    }
  }
}
