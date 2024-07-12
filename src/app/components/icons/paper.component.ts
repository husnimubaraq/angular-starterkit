import { Component, Input } from '@angular/core';

@Component({
  selector: 'paper-icon',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 17"
      [class]="class"
    >
      <line x1="0.5" y1="-0.5" x2="5.5" y2="-0.5" transform="matrix(1 0 0 -1 5 4.5)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
      <line x1="0.5" y1="-0.5" x2="5.5" y2="-0.5" transform="matrix(1 0 0 -1 5 7.5)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1 0.5H13C14.1046 0.5 15 1.39543 15 2.5V16.5H3C1.89543 16.5 1 15.6046 1 14.5V0.5Z" stroke="currentColor" />
    </svg>
  `
})
export class PaperIcon {

  @Input() class = 'w-[24px] h-[24px]';
}
