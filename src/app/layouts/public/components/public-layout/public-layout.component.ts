import { Component } from '@angular/core';
import { BottomNavigation } from 'layouts/public/components/bottom-navigation/bottom-navigation.component';

@Component({
  selector: 'public-layout',
  standalone: true,
  imports: [
    BottomNavigation
  ],
  templateUrl: './public-layout.component.html',
})
export class PublicLayout {

}
