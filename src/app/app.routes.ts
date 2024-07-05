import { Routes } from '@angular/router';
import { HomeWrapper } from 'features/public/home';
import { TranasctionWrapper } from 'features/public/transaction';

export const routes: Routes = [
  { path: '', component: HomeWrapper },
  { path: 'transaction', component: TranasctionWrapper },
];
