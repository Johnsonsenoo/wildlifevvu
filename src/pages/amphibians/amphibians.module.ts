import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmphibiansPage } from './amphibians';

@NgModule({
  declarations: [
    AmphibiansPage,
  ],
  imports: [
    IonicPageModule.forChild(AmphibiansPage),
  ],
})
export class AmphibiansPageModule {}
