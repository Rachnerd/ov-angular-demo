import { Routes } from '@angular/router';
import { SmartHomeComponent } from './smart/smart-home/smart-home.component';

export const routes: Routes = [
  {
    path: '',
    component: SmartHomeComponent,
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./smart/smart-products/smart-products.component').then(
        (f) => f.SmartProductsComponent
      ),
  },
];
