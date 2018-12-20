import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'order-list',
    pathMatch: 'full'
  },
  { path: 'order-list', loadChildren: './order-list/order-list.module#OrderListPageModule' },
  { path: 'store', loadChildren: './store/store.module#StorePageModule' },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },  { path: 'AddProduct', loadChildren: './add-product/add-product.module#AddProductPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
