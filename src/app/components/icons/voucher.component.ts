import { Component, Input } from '@angular/core';

@Component({
  selector: 'voucher-icon',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 17"
      [class]="class"
    >
    <path
      d="M14.2776 0.5H8.20544C8.08118 0.5 7.96191 0.549441 7.87402 0.637336L0.50354 8.00797C-0.167847 8.67964 -0.167847 9.77235 0.50354 10.4438L6.05664 15.997C6.38086 16.3213 6.81335 16.4999 7.27429 16.5H7.27441C7.73547 16.5 8.16797 16.3213 8.49231 15.9969L15.8625 8.62617C15.9504 8.53827 15.9999 8.419 15.9999 8.29473L16 2.22226C15.9999 1.27262 15.2272 0.5 14.2776 0.5ZM15.0624 8.10063L7.82935 15.334C7.68213 15.4814 7.48499 15.5624 7.27441 15.5624C7.06372 15.5624 6.8667 15.4814 6.71948 15.3342L1.16638 9.78089C0.860474 9.47497 0.860474 8.97689 1.16638 8.67085L8.39954 1.43755H14.2776C14.7103 1.43755 15.0625 1.78962 15.0625 2.22238L15.0624 8.10063Z"
      fill="currentColor"
    />
    <path
      d="M11.8683 3.15894C11.4748 3.15894 11.105 3.31226 10.8268 3.59048C10.5486 3.86857 10.3954 4.23846 10.3954 4.63192C10.3954 5.02537 10.5486 5.39527 10.8268 5.67348C11.105 5.9517 11.4748 6.1049 11.8683 6.1049C12.2616 6.1049 12.6315 5.9517 12.9097 5.67348C13.1879 5.39527 13.3411 5.02537 13.3411 4.63192C13.3411 4.23846 13.1879 3.86857 12.9098 3.59048C12.6316 3.31226 12.2617 3.15894 11.8683 3.15894ZM12.2468 5.01048C12.1457 5.11168 12.0112 5.16735 11.8683 5.16735C11.7252 5.16735 11.5908 5.11168 11.4897 5.01048C11.3885 4.9094 11.3329 4.77487 11.3329 4.63192C11.3329 4.48897 11.3885 4.35444 11.4897 4.25336C11.5908 4.15216 11.7253 4.09649 11.8683 4.09649C12.0112 4.09649 12.1456 4.15216 12.2468 4.25336C12.348 4.35444 12.4037 4.48897 12.4037 4.63192C12.4037 4.77487 12.3479 4.9094 12.2468 5.01048Z"
      fill="currentColor"
    />
    </svg>
  `
})
export class VoucherIcon {

  @Input() class = 'w-[24px] h-[24px]';
}
