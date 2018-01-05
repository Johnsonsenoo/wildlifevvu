import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SquirrelPage } from './squirrel';

@NgModule({
  declarations: [
    SquirrelPage,
  ],
  imports: [
    IonicPageModule.forChild(SquirrelPage),
  ],
})
export class SquirrelPageModule {}
