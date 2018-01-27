import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
/**
 * Generated class for the RecepiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recepies',
  templateUrl: 'recepies.html',
})
export class RecepiesPage {
  items:any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider) {
this.doRefresh(null);
     
  }


  doRefresh(refresher) {
    this.items = [];
    this.api.getRecepies().then(res => {
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

  go(r){
    this.navCtrl.push("RecepieviewPage",{item:r});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecepiesPage');
  }

}
