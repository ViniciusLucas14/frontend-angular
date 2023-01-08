import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './view/product/product.component';
import { ProductsComponent } from './view/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'produtos',
    component: ProductsComponent,
  },
  {
    path: 'produto/:id',
    component: ProductComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'produtos'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
