import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PublicLayout, Header } from 'layouts/public';

@Component({
  selector: 'transaction-wrapper',
  standalone: true,
  imports: [
    PublicLayout,
    Header,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './transaction-wrapper.component.html'
})
export class TranasctionWrapper {

}
