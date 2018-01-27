import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {
items:any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider) {
    this.doRefresh(null);
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
  }


  go(offer){
    this.navCtrl.push("OfferviewPage", {item:offer});
  }
  doRefresh(refresher) {
    this.items = [];
    this.api.getOffers().then(res => {
      console.log(res);
      if(refresher != null){
        refresher.complete();
      }
      if(res["status"]){
        this.items = res["data"];
       
      }
      else{
        //no results
      }
    })
  }

}
