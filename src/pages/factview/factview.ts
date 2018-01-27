import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FactviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-factview',
  templateUrl: 'factview.html',
})
export class FactviewPage {
fact:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fact = this.navParams.get('fact');
    console.log(this.fact);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactviewPage');
  }

}
