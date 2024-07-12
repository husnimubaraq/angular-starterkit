import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BarsIcon, SearchIcon } from 'components/icons';
import { SideBarService } from 'layouts/public';

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

  constructor(private sideBarService: SideBarService) {}

  clickMenu() {
    // this.sideBarService.show = true
    this.sideBarService.openModal()
  }
}
