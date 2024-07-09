import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
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
  show: boolean = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if(!["", "transaction"].includes(this.route.snapshot.routeConfig?.path ?? "")){
      this.show = false
    }
  }
}
