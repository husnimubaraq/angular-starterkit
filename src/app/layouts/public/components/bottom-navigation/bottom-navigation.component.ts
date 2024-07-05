import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BasketIcon, CalendarIcon, HomeIcon } from 'components/icons';

@Component({
  selector: 'bottom-navigation',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    HomeIcon,
    CalendarIcon,
    BasketIcon
  ],
  templateUrl: './bottom-navigation.component.html',
})
export class BottomNavigation {

}
