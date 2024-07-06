import { Component, Input } from '@angular/core';

@Component({
  selector: 'bars-icon',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" [class]="class">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  `
})
export class BarsIcon {

  @Input() class = 'w-[24px] h-[24px]';
}