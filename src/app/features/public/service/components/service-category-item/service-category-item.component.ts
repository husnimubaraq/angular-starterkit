import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BarsIcon, SearchIcon } from 'components/icons';
import { TProductCategory } from "features/public/product";
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'service-category-item',
  standalone: true,
  imports: [
    BarsIcon,
    SearchIcon,
  ],
  templateUrl: './service-category-item.component.html'
})
export class ServiceCategoryItem  {
  @Input() data: TProductCategory | null = null;
  @Input() active: boolean = false;

  containerClass: string = "p-5 text-white bg-secondary rounded-lg flex flex-col items-center justify-center mb-2  border-white hover:bg-primary hover:border-primary hover:text-primary"
  activeClass: string = twMerge(
    this.containerClass,
    "bg-primary border-primary text-primary"
  )

  @Output() onPressEvent = new EventEmitter<TProductCategory>();

  onPressItem(){
    if(this.data){
      this.onPressEvent.emit(this.data);
    }
  }
}
