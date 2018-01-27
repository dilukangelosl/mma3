import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BmiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmi',
  templateUrl: 'bmi.html',
})
export class BmiPage {

  weight:any ;
  height:any ;
  loader:boolean = false;
  result:string = "";
  bmi:any = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BmiPage');
  }

  calculate(){
    this.loader = true;
   setTimeout(() => {
    if(this.weight >0 && this.height > 0 ){
      var bmi = this.weight / this.height ; 
      this.bmi = Math.round(bmi * 100) / 100 ;
     if(bmi < 18.5){
       this.result = "Underweight";
     }else if(bmi >= 18.1 && bmi <= 22.9){
      this.result = "Normal";
     }
     else if(bmi >= 23 && bmi <= 24.9){
      this.result = "Overweight";
     }
     else if(bmi >= 25 && bmi <= 29.9){
      this.result = "Pre-Obese";
     }
     else if(bmi >= 30 ){
      this.result = "Obsese";
     }
     else if(bmi > 30 && bmi <= 40){
      this.result = "Morbid Obese";
     }
     else if(bmi > 50){
      this.result = "Super Obese";
     }
    }

    this.loader = false;
   }, 2000);
  }

}
