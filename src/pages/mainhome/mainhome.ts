import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'homePage'
})
@Component({
  selector: 'page-mainhome',
  templateUrl: 'mainhome.html',
})
export class MainhomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainhomePage');
  }

  gotoPage(name:string){
    this.navCtrl.push("FeedPage");
  }


}
