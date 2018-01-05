import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BearPage } from '../bear/bear';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
bearPage(){
  this.navCtrl.push(BearPage);
}
}
