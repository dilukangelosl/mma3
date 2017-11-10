import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
/**
 * Generated class for the FeedviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedview',
  templateUrl: 'feedview.html',
})
export class FeedviewPage {
feed:any ; 


formatDate (date:any) {

  var m = moment(date);



return m.format('YYYY-MM-DD');
}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.feed = this.navParams.get('feed');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedviewPage');
  }

}
