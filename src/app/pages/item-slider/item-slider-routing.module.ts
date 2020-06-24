import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemSliderPage } from './item-slider.page';

const routes: Routes = [
  {
    path: '',
    component: ItemSliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemSliderPageRoutingModule {}
