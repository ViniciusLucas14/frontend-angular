import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { IonicModule } from '@ionic/angular';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    IonicModule,
  ]
})
export class CartModule { }
