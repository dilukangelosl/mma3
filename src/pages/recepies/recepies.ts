import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {

     this.items = [

      {
        image:"http://i.ndtvimg.com/i/2015-05/chicken-curry_625x350_61430904532.jpg",
        title:"Recepie 1",
        views:"10"
      },

      {
        image:"https://truffle-assets.imgix.net/pxqrocxwsjcc_11HE1yMs1aKaCCwkw4mqmk_SPICY%20HONEY%20MUSTARD%20CHICKEN_HIGH%20RES%20IMAGE%201080X1080.jpg",
        title:"Recepie 2",
        views:"20"
      },

      {
        image:"https://media3.giphy.com/media/fLkE307mzATte/200_s.gif",
        title:"Recepie 3",
        views:"15"
      },

      {
        image:"https://images.contentful.com/pxqrocxwsjcc/4tHkN40Ze0KAG4OaO2qoqg/5bba50ed7003627b029b43588450de24/ferrero-rocher-cheesecake_landscapeThumbnail_en-US.jpeg?w=960&fl=progressive&fm=jpg",
        title:"Recepie 4",
        views:"95"
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecepiesPage');
  }

}
