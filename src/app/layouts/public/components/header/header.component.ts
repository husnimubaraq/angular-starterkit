import { AfterViewInit, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ChevronLeftIcon } from 'components/icons';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'public-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ChevronLeftIcon
  ],
  templateUrl: './header.component.html',
})
export class Header implements AfterViewInit {
  @Input() title: string = 'Title';
  @Input() class: string = 'fixed left-0 right-0 top-0 flex items-center justify-between bg-black h-30 px-5 py-3 text-white -mb-1 z-50 mx-auto max-w-screen-sm';
  @Input() containerClassName: string = ''
  ngAfterViewInit(): void {
    if(this.containerClassName){
      this.class = twMerge(
        this.containerClassName,
      );
    }
  }
}
