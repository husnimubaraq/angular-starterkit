import { Component, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeIcon } from 'components/icons';
import { Header } from 'layouts/public';
import { TProduct, ProductItem, productLists } from 'features/public/product'
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SwiperContainer } from 'swiper/element';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'home-product',
  standalone: true,
  imports: [
    Header,
    HomeIcon,
    RouterLink,
    RouterLinkActive,
    ProductItem
  ],
  templateUrl: './home-product.component.html',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeProduct {

  @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>;

  data: TProduct[] = productLists

}
