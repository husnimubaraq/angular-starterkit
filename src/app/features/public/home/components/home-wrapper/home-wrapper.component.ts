import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BasketIcon, HomeIcon } from 'components/icons';
import { PublicLayout, Header } from 'layouts/public';

@Component({
  selector: 'home-wrapper',
  standalone: true,
  imports: [
    PublicLayout,
    Header,
    HomeIcon,
    BasketIcon,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './home-wrapper.component.html'
})
export class HomeWrapper {

}
