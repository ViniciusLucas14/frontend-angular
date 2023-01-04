import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs.component';
import { ProductsComponent } from '../../components/products/products.component';
import { HomeComponent } from '../home/home.component';
import { CartComponent } from '../cart/cart.component';


@NgModule({
  declarations: [
    TabsComponent,
    ProductsComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    TabsRoutingModule,
    IonicModule,
  ]
})
export class TabsModule { }
