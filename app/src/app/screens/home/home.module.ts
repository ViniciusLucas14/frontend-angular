import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from 'src/app/components/products/products.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule,
  ]
})
export class HomeModule { }
