import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
products:any ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.products = [

      {
        name:"Marina Oil",
        image:"./assets/img/product1.jpg",
        description:"demo Description",
        price:"Rs 500"
      },
      {
        name:"Marina Oil",
        image:"./assets/img/product2.jpg",
        description:"demo Description",
        price:"Rs 500"
      },
      {
        name:"Marina Oil",
        image:"./assets/img/product3.jpg",
        description:"demo Description",
        price:"Rs 500"
      },
      {
        name:"Marina Oil",
        image:"./assets/img/product4.jpg",
        description:"demo Description",
        price:"Rs 500"
      },
      {
        name:"Marina Oil",
        image:"./assets/img/product5.jpg",
        description:"demo Description",
        price:"Rs 500"
      },
      {
        name:"Marina Oil",
        image:"./assets/img/product6.jpg",
        description:"demo Description",
        price:"Rs 500"
      },
      {
        name:"Marina Oil",
        image:"./assets/img/product7.jpg",
        description:"demo Description",
        price:"Rs 500"
      },
      {
        name:"Marina Oil",
        image:"./assets/img/product8.jpg",
        description:"demo Description",
        price:"Rs 500"
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

}
