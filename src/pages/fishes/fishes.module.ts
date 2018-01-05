import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FishesPage } from './fishes';

@NgModule({
  declarations: [
    FishesPage,
  ],
  imports: [
    IonicPageModule.forChild(FishesPage),
  ],
})
export class FishesPageModule {}
