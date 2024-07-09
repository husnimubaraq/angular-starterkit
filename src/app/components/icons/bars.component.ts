import { Component, Input } from '@angular/core';

@Component({
  selector: 'bars-icon',
  standalone: true,
  template: `
    <svg viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg" [class]="class">
      <line x1="18" y1="13" x2="13.0635" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="18" y1="7" x2="7.03177" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="18" y1="1" x2="1.00002" y2="1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class BarsIcon {

  @Input() class = 'w-[24px] h-[24px]';
}
