import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BasketIcon, HomeIcon } from 'components/icons';
import { PublicLayout, Header } from 'layouts/public';
import { HomeHero } from 'features/public/home/components/home-hero/home-hero.component'
import { HomeService } from 'features/public/home/components/home-service/home-service.component'
import { HomeProduct } from 'features/public/home/components/home-product/home-product.component'
import { SideBar } from 'layouts/public/components/side-bar/side-bar.component';

@Component({
  selector: 'home-wrapper',
  standalone: true,
  imports: [
    PublicLayout,
    Header,
    HomeIcon,
    HomeHero,
    HomeService,
    HomeProduct,
    BasketIcon,
    RouterLink,
    RouterLinkActive,
    SideBar
  ],
  templateUrl: './home-wrapper.component.html'
})
export class HomeWrapper {

}
