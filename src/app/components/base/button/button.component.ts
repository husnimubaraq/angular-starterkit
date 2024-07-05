import { AfterViewInit, Component, HostBinding, Input } from '@angular/core';
import { TVariant } from './button.type';
import { twMerge } from 'tailwind-merge';
import { variants } from './button.data';

@Component({
  selector: 'base-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent implements AfterViewInit {
  @Input() variant: TVariant = 'default';
  @Input() containerClassName: string = 'h-8 rounded-md w-20';

  ngAfterViewInit(): void {
    this.containerClassName = twMerge(
      this.containerClassName,
      variants[this.variant],
    );
  }

}
