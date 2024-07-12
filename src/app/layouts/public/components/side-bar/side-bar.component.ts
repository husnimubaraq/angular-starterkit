import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BarsIcon } from 'components/icons';
import { dataMenu } from 'layouts/public/data'
import { TSideBar } from 'layouts/public/types'
import { SafeHtmlPipe, ComponentToStringPipe } from 'utils';

@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [
    BarsIcon,
    RouterLink,
    RouterLinkActive,
    SafeHtmlPipe,
    ComponentToStringPipe,
    CommonModule
  ],
  templateUrl: './side-bar.component.html',
})
export class SideBar {
  data: TSideBar[] = dataMenu
  class = "w-[20px] h-[20px]"
}
