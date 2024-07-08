import { Component, inject } from '@angular/core';
import { HomeIcon } from 'components/icons';
import { Header } from 'layouts/public';
import { HomeServiceCategory } from 'features/public/home/components/home-service-category/home-service-category.component'
import { ServiceItem, serviceLists, serviceCategories } from 'features/public/service'
import { TProduct } from 'features/public/product'
import { ServiceCategoryService } from 'features/public/home/services'
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'home-service',
  standalone: true,
  imports: [
    Header,
    HomeIcon,
    RouterLink,
    RouterLinkActive,
    HomeServiceCategory,
    ServiceItem
  ],
  templateUrl: './home-service.component.html'
})
export class HomeService{

  serviceCategoryService = inject(ServiceCategoryService)
  data: TProduct[] = []

  ngDoCheck(){
    const category = serviceCategories.find(x => x.id === this.serviceCategoryService.getCurrentId())
    this.data = serviceLists.filter(x => x.product_category_name === category?.name)
  }
}
