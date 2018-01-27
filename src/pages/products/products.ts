import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  products: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider) {

  this.doRefresh(null);
  }

  doRefresh(refresher) {
    this.products = [];
    this.api.getProducts().then(res => {
      console.log(res);
      if(refresher != null){
        refresher.complete();
      }
      if(res["status"]){
        this.products = res["data"];
       
      }
      else{
        //no results
      }
    })
  }

  go(product){
    this.navCtrl.push("ProductviewPage", {product:product});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

}
