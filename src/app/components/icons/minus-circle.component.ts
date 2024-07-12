import { Component, Input } from '@angular/core';

@Component({
  selector: 'minus-circle-icon',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      [class]="class"
    >
      <rect x="1" y="1" width="22" height="22" rx="11" stroke="currentColor" />
      <path d="M17 12H7" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
  `
})
export class MinusCicleIcon {

  @Input() class = 'w-[24px] h-[24px]';
}
