import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
/**
 * Generated class for the FactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facts',
  templateUrl: 'facts.html',
})
export class FactsPage {
facts:any ;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController, public api:ApiProvider) {
   
this.doRefresh(null);

  }

  doRefresh(refresher) {
    this.facts = [];
    this.api.getFacts().then(res => {
      console.log(res);
      if(refresher != null){
        refresher.complete();
      }
      if(res["data"]){
        this.facts = res["data"];
       
      }
      else{
        //no results
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactsPage');
  }

   openFact (fact:any){
    this.navCtrl.push("FactviewPage", {fact:fact});

  }

}
