import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiraffePage } from './giraffe';

@NgModule({
  declarations: [
    GiraffePage,
  ],
  imports: [
    IonicPageModule.forChild(GiraffePage),
  ],
})
export class GiraffePageModule {}
