import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './view/products/products.component';
import { ProductComponent } from './view/product/product.component';
import { IonicModule } from '@ionic/angular';
import { ProductsRoutingModule } from './products-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProductsRoutingModule,
    ComponentsModule
  ],
  declarations: [
    ProductsComponent,
    ProductComponent
  ]
})
export class ProductsModule { }
