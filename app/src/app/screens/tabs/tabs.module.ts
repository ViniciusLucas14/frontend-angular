import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    TabsComponent,
  ],
  imports: [
    CommonModule,
    TabsRoutingModule,
    IonicModule,
    ComponentsModule
  ]
})
export class TabsModule { }
