import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PantherPage } from './panther';

@NgModule({
  declarations: [
    PantherPage,
  ],
  imports: [
    IonicPageModule.forChild(PantherPage),
  ],
})
export class PantherPageModule {}
