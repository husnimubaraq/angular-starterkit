import { Component } from '@angular/core';
import { TProduct, productLists } from "features/public/product";
import { SafeHtmlPipe } from 'utils';
import { CurrencyPipe } from '@angular/common';
import { PublicLayout } from 'layouts/public';
import { ActivatedRoute } from '@angular/router';
import slugify from 'slugify';

@Component({
  selector: 'service-item',
  standalone: true,
  imports: [
    SafeHtmlPipe,
    CurrencyPipe,
    PublicLayout,
  ],
  templateUrl: './product-detail-wrapper.component.html',
})
export class ProductDetailWrapper{

  data: TProduct | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const product = productLists.find(x => slugify(x.name, {
      lower: true
    }) === this.route.snapshot.params['slug'])

    if(product){
      this.data = product
    }
  }
}
