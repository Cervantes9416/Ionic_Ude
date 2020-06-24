import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemSliderPageRoutingModule } from './item-slider-routing.module';

import { ItemSliderPage } from './item-slider.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemSliderPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ItemSliderPage]
})
export class ItemSliderPageModule {}
