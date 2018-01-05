import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MammalsPage } from './mammals';

@NgModule({
  declarations: [
    MammalsPage,
  ],
  imports: [
    IonicPageModule.forChild(MammalsPage),
  ],
})
export class MammalsPageModule {}
