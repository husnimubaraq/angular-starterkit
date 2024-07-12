import { Component, Input } from '@angular/core';

@Component({
  selector: 'outlet-icon',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 17"
      [class]="class"
    >
      <path
        d="M17.9831 5.50457L16.8581 0.933143C16.7962 0.678286 16.5701 0.5 16.3125 0.5H1.6875C1.42988 0.5 1.20375 0.678286 1.14188 0.933143L0.016875 5.50457C0.005625 5.54914 0 5.596 0 5.64286C0 6.60057 0.446625 7.44514 1.125 7.964V15.9286C1.125 16.244 1.377 16.5 1.6875 16.5H7.3125C7.623 16.5 7.875 16.244 7.875 15.9286V11.9286H10.125V15.9286C10.125 16.244 10.377 16.5 10.6875 16.5H16.3125C16.623 16.5 16.875 16.244 16.875 15.9286V7.964C17.5534 7.44514 18 6.60057 18 5.64286C18 5.596 17.9944 5.54914 17.9831 5.50457ZM15.75 15.3571H11.25V11.3571C11.25 11.0417 10.998 10.7857 10.6875 10.7857H7.3125C7.002 10.7857 6.75 11.0417 6.75 11.3571V15.3571H2.25V8.45429C2.38838 8.47829 2.52787 8.5 2.67188 8.5C3.52912 8.5 4.29187 8.06686 4.78125 7.39486C5.27063 8.06686 6.03337 8.5 6.89062 8.5C7.74788 8.5 8.51062 8.06686 9 7.39486C9.48938 8.06686 10.2521 8.5 11.1094 8.5C11.9666 8.5 12.7294 8.06686 13.2188 7.39486C13.7081 8.06686 14.4709 8.5 15.3281 8.5C15.4721 8.5 15.6116 8.47829 15.75 8.45429V15.3571ZM15.3281 7.35714C14.4754 7.35714 13.7812 6.588 13.7812 5.64286C13.7812 5.32743 13.5293 5.07143 13.2188 5.07143C12.9082 5.07143 12.6562 5.32743 12.6562 5.64286C12.6562 6.588 11.9621 7.35714 11.1094 7.35714C10.2566 7.35714 9.5625 6.588 9.5625 5.64286C9.5625 5.32743 9.3105 5.07143 9 5.07143C8.6895 5.07143 8.4375 5.32743 8.4375 5.64286C8.4375 6.588 7.74337 7.35714 6.89062 7.35714C6.03788 7.35714 5.34375 6.588 5.34375 5.64286C5.34375 5.32743 5.09175 5.07143 4.78125 5.07143C4.47075 5.07143 4.21875 5.32743 4.21875 5.64286C4.21875 6.588 3.52463 7.35714 2.67188 7.35714C1.83938 7.35714 1.15763 6.62343 1.12613 5.70914L2.12738 1.64286H15.8737L16.875 5.70914C16.8424 6.62343 16.1606 7.35714 15.3281 7.35714Z"
        fill="currentColor"
      />
    </svg>
  `
})
export class OutletIcon {

  @Input() class = 'w-[24px] h-[24px]';
}