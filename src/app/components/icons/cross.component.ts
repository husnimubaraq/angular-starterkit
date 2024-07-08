import { Component, Input } from '@angular/core';

@Component({
  selector: 'cross-icon',
  standalone: true,
  template: `
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      [class]="class"
    >
      <path
        d="M11.5909 2.52685C11.7145 2.41159 11.8141 2.2731 11.8841 2.1193C11.9542 1.9655 11.9933 1.7994 11.9992 1.63048C12.0051 1.46155 11.9777 1.29312 11.9186 1.13479C11.8595 0.976465 11.7698 0.831344 11.6546 0.707715C11.5394 0.584086 11.401 0.48437 11.2474 0.414261C11.0937 0.344152 10.9277 0.305022 10.7589 0.299107C10.5901 0.293191 10.4218 0.320606 10.2636 0.379784C10.1054 0.438963 9.96044 0.528747 9.83691 0.64401L6.07425 4.15487L2.56621 0.387902C2.33148 0.147296 2.01199 0.00819005 1.67608 0.000350215C1.34017 -0.00748962 1.01454 0.11656 0.768861 0.345954C0.523183 0.575348 0.376974 0.891864 0.361519 1.22778C0.346065 1.56369 0.462593 1.89231 0.686169 2.14333L4.19421 5.90901L0.430266 9.41987C0.302373 9.53397 0.198551 9.67249 0.124897 9.8273C0.0512424 9.98211 0.0092414 10.1501 0.00136106 10.3214C-0.00651928 10.4927 0.0198794 10.6638 0.0790073 10.8247C0.138135 10.9857 0.2288 11.1331 0.345675 11.2585C0.462551 11.3839 0.603282 11.4846 0.759601 11.5548C0.915921 11.625 1.08468 11.6632 1.25596 11.6672C1.42724 11.6712 1.59759 11.6409 1.75701 11.5781C1.91643 11.5153 2.0617 11.4212 2.18429 11.3014L5.94695 7.79185L9.45499 11.5575C9.56826 11.6879 9.70659 11.7941 9.86175 11.8698C10.0169 11.9455 10.1857 11.9892 10.3581 11.9982C10.5305 12.0073 10.7029 11.9815 10.8651 11.9224C11.0273 11.8633 11.176 11.7722 11.3022 11.6544C11.4285 11.5366 11.5298 11.3945 11.6 11.2367C11.6702 11.0789 11.708 10.9086 11.7111 10.7358C11.7141 10.5631 11.6824 10.3915 11.6178 10.2313C11.5532 10.0711 11.457 9.9256 11.335 9.80339L7.82827 6.03771L11.5909 2.52685Z"
        fill="currentColor"
      />
    </svg>
  `
})
export class CrossIcon {

  @Input() class = 'w-[24px] h-[24px]';
}