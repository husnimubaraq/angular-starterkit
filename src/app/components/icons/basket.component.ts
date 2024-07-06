import { Component, Input } from '@angular/core';

@Component({
  selector: 'basket-icon',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 32"
      [class]="class"
    >
    <path
      d="M11.5988 21.3336H11.6005C11.6019 21.3336 11.6032 21.3333 11.6046 21.3333H30.7266C31.1974 21.3333 31.6113 21.0175 31.7407 20.5597L35.9594 5.62639C36.0503 5.30445 35.9866 4.95833 35.7875 4.69111C35.5881 4.42389 35.2763 4.26667 34.9454 4.26667H9.16646L8.41252 0.835278C8.30513 0.347222 7.87721 0 7.38282 0H1.05469C0.472138 0 0 0.4775 0 1.06667C0 1.65583 0.472138 2.13333 1.05469 2.13333H6.53688C6.67036 2.74139 10.1448 18.5542 10.3447 19.4639C9.22386 19.9567 8.43751 21.087 8.43751 22.4C8.43751 24.1645 9.85695 25.6 11.6016 25.6H30.7266C31.3092 25.6 31.7813 25.1225 31.7813 24.5333C31.7813 23.9442 31.3092 23.4667 30.7266 23.4667H11.6016C11.0201 23.4667 10.5469 22.9881 10.5469 22.4C10.5469 21.8128 11.0185 21.335 11.5988 21.3336ZM33.5471 6.4L29.9309 19.2H12.4475L9.63503 6.4H33.5471Z"
      fill="currentColor" />
    <path
        d="M10.5469 28.8001C10.5469 30.5645 11.9663 32.0001 13.7109 32.0001C15.4556 32.0001 16.875 30.5645 16.875 28.8001C16.875 27.0357 15.4556 25.6001 13.7109 25.6001C11.9663 25.6001 10.5469 27.0357 10.5469 28.8001ZM13.7109 27.7334C14.2924 27.7334 14.7656 28.212 14.7656 28.8001C14.7656 29.3882 14.2924 29.8668 13.7109 29.8668C13.1295 29.8668 12.6563 29.3882 12.6563 28.8001C12.6563 28.212 13.1295 27.7334 13.7109 27.7334Z"
        fill="currentColor" />
    <path
      d="M25.4531 28.8001C25.4531 30.5645 26.8726 32.0001 28.6172 32.0001C30.3618 32.0001 31.7813 30.5645 31.7813 28.8001C31.7813 27.0357 30.3618 25.6001 28.6172 25.6001C26.8726 25.6001 25.4531 27.0357 25.4531 28.8001ZM28.6172 27.7334C29.1986 27.7334 29.6719 28.212 29.6719 28.8001C29.6719 29.3882 29.1986 29.8668 28.6172 29.8668C28.0357 29.8668 27.5625 29.3882 27.5625 28.8001C27.5625 28.212 28.0357 27.7334 28.6172 27.7334Z"
      fill="currentColor" />
    </svg>
  `
})
export class BasketIcon {

  @Input() class = 'w-[24px] h-[24px]';
}
