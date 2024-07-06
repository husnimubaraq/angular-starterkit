import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BarsIcon, SearchIcon } from 'components/icons';

@Component({
  selector: 'home-hero',
  standalone: true,
  imports: [
    BarsIcon,
    SearchIcon,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './home-hero.component.html'
})
export class HomeHero {

}
