import { Component, Input } from '@angular/core';
import { BottomNavigation } from 'layouts/public/components/bottom-navigation/bottom-navigation.component';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'public-layout',
  standalone: true,
  imports: [
    BottomNavigation
  ],
  templateUrl: './public-layout.component.html',
})
export class PublicLayout {
  class: string = "mx-auto flex flex-col min-h-screen overflow-hidden max-w-screen-sm w-full bg-dark"
  @Input() containerClass: string = ""

  ngOnInit(): void {
    if(this.containerClass){
      this.class = twMerge(
        this.class,
        this.containerClass
      )
    }
  }
}
