import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
   this.facts = [
      {
        title:"The coconut comes from the coconut palm tree which grows throughout the tropics and subtropics.",

      },

      {
        title: 'The name coconut is derived from 16th century Portuguese sailors who thought the 3 small holes on the coconut shell resembled the human face so dubbed the fruit "coco" meaning "grinning face, grin, or grimace" The word nut was added in English later on.',

      },
      {
        title:"The coconut palm (Cocos nucifera) can grow up to 30 m (98 ft) tall and the leave fronds 4–6 m (13.1–19.7 ft) long.",

      },
      {
        title:"Technically the coconut fruit is a drupe not a nut. Typical drupes include peaches, plums, and cherries.",

      },
      {
        title:"In the early stages of a coconuts growth it contains high levels of water which can be consumed directly as a refreshing drink. The water is also gaining popularity as a sports drink as it contains good levels of sugars, dietary fiber, proteins, antioxidants, vitamins, and minerals.",

      }
      ,{
        title:"Coconut water can be a substitute for blood plasma. The high level of sugar and other salts make it possible to add the water to the bloodstream, similar to how an IV solution works in modern medicine. Coconut water was known to be used during World War II in tropical areas for emergency transfusions.",

      }
    ];


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactsPage');
  }

   openFact (fact:any){
    let alert = this.alertCtrl.create({
      title: 'Fact',
      subTitle: fact.title,
      buttons: ['Okay Got It!']
    });
    alert.present();

  }

}
