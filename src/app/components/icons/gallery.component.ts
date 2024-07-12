import { Component, Input } from '@angular/core';

@Component({
  selector: 'gallery-icon',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 17"
      [class]="class"
    >
      <path
          d="M1.45455 3.40918H0V15.0455C0 15.8491 0.650897 16.5001 1.45455 16.5001H13.0909V15.0455H1.45455V3.40918Z"
          fill="currentColor"
      />
      <path
          d="M14.5454 0.5H4.36363C3.56 0.5 2.90907 1.1509 2.90907 1.95455V12.1364C2.90907 12.94 3.56 13.5909 4.36363 13.5909H14.5454C15.3491 13.5909 16 12.94 16 12.1363V1.95455C16 1.1509 15.3491 0.5 14.5454 0.5ZM14.5454 12.1363H4.36363V1.95455H14.5454V12.1363Z"
          fill="currentColor"
      />
    </svg>
  `
})
export class GalleryIcon {

  @Input() class = 'w-[24px] h-[24px]';
}
