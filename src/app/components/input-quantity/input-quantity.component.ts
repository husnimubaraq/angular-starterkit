import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MinusCicleIcon, PlusCicleIcon } from 'components/icons';

@Component({
  selector: 'input-quantity',
  standalone: true,
  imports: [
    MinusCicleIcon,
    PlusCicleIcon
  ],
  templateUrl: './input-quantity.component.html',
})
export class InputQuantity {

  @Input() value: number = 0;

  @Output() onPlusEvent = new EventEmitter<void>();
  @Output() onMinusEvent = new EventEmitter<void>();

  onPlus(){
    this.onPlusEvent.emit();
  }

  onMinus(){
    this.onMinusEvent.emit();
  }

}
