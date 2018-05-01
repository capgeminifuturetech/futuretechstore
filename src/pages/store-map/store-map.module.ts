import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreMapPage } from './store-map';

@NgModule({
  declarations: [
    StoreMapPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreMapPage),
  ],
})
export class StoreMapPageModule {}
