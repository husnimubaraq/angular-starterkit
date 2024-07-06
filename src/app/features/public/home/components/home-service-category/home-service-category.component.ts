import { Component } from '@angular/core';
import { HomeIcon } from 'components/icons';
import { Header } from 'layouts/public';
import { ServiceCategoryItem, serviceCategories } from 'features/public/service'
import { TProductCategory } from 'features/public/product'
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'home-service-category',
  standalone: true,
  imports: [
    Header,
    HomeIcon,
    RouterLink,
    RouterLinkActive,
    ServiceCategoryItem
  ],
  templateUrl: './home-service-category.component.html'
})
export class HomeServiceCategory {
  currentId: number = 1;

  data = serviceCategories

  onChange(item: TProductCategory){
    console.log(item)
    this.currentId = item.id;
  }
}
