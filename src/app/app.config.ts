import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: ProductListComponent },
      { path: 'cart', component: CartComponent }
    ])
  ]
};
