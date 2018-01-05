import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoxPage } from './fox';

@NgModule({
  declarations: [
    FoxPage,
  ],
  imports: [
    IonicPageModule.forChild(FoxPage),
  ],
})
export class FoxPageModule {}
