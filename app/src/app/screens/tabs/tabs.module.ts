import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs.component';
import { HomeComponent } from '../home/home.component';
import { CartComponent } from '../cart/cart.component';
import { ProductsComponent } from '../product/view/products/products.component';


@NgModule({
  declarations: [
    TabsComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    TabsRoutingModule,
    IonicModule,
  ]
})
export class TabsModule { }
