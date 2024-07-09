import { Component, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeIcon } from 'components/icons';
import { Header } from 'layouts/public';
import { ServiceCategoryItem, serviceCategories } from 'features/public/service'
import { TProductCategory } from 'features/public/product'
import { ServiceCategoryService } from 'features/public/home/services'
import { RouterLink, RouterLinkActive } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();

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
  templateUrl: './home-service-category.component.html',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeServiceCategory {

  currentId: number = serviceCategories[0].id;

  data = serviceCategories

  serviceCategoryService = inject(ServiceCategoryService)

  onChange(item: TProductCategory){
    this.currentId = item.id;
    this.serviceCategoryService.currentId = item.id
  }
}
