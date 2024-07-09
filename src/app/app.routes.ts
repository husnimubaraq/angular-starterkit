import { Routes } from '@angular/router';
import { HomeWrapper } from 'features/public/home';
import { TranasctionWrapper } from 'features/public/transaction';
import { ProductDetailWrapper } from 'features/public/product';

export const routes: Routes = [
  { path: '', component: HomeWrapper },
  { path: 'transaction', component: TranasctionWrapper },
  { path: 'product/:slug', component: ProductDetailWrapper },
];
