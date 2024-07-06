import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BasketIcon, HomeIcon } from 'components/icons';
import { PublicLayout, Header } from 'layouts/public';
import { HomeHero } from 'features/public/home/components/home-hero/home-hero.component'
import { HomeService } from 'features/public/home/components/home-service/home-service.component'

@Component({
  selector: 'home-wrapper',
  standalone: true,
  imports: [
    PublicLayout,
    Header,
    HomeIcon,
    HomeHero,
    HomeService,
    BasketIcon,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './home-wrapper.component.html'
})
export class HomeWrapper {

}
