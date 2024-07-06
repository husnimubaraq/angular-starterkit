import { Component } from '@angular/core';
import { HomeIcon } from 'components/icons';
import { Header } from 'layouts/public';
import { HomeServiceCategory } from 'features/public/home/components/home-service-category/home-service-category.component'
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'home-service',
  standalone: true,
  imports: [
    Header,
    HomeIcon,
    RouterLink,
    RouterLinkActive,
    HomeServiceCategory
  ],
  templateUrl: './home-service.component.html'
})
export class HomeService {

}
