import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { BannerSwiperComponent } from './banner-swiper/banner-swiper.component';
import { SwiperModule } from 'swiper/angular';
import { SubHeaderComponent } from './sub-header/sub-header.component';


@NgModule({
  declarations: [
    ProductsComponent,
    HeaderComponent,
    BannerSwiperComponent,
    SubHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule
  ],
  exports: [
    ProductsComponent,
    HeaderComponent,
    BannerSwiperComponent
  ]
})
export class ComponentsModule { }
