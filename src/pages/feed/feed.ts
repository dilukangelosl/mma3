import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { ApiProvider } from '../../providers/api/api';
/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  feeds: any;
  now: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {

    this.doRefresh(null);

    //data Structure
    var m = moment(new Date());



    //his.now = m.format('YYYY-MM-DDTHH:mm:ss.sssZ')
    this.now = m;

  



  }
  doRefresh(refresher) {
    this.feeds = [];
    this.api.getNews().then(res => {
      console.log(res);
      if(refresher != null){
        refresher.complete();
      }
      if(res["status"]){
        this.feeds = res["data"];
       
      }
      else{
        //no results
      }
    })
  }

  

  getTime(endTime: any) {

    var obj;
    var now = this.now;//todays date
    var end = moment(endTime); // another date
    var duration = moment.duration(now.diff(end));
    var hours = duration.asHours();
    var mins = duration.asMinutes();
    var days = duration.asDays();

    if (mins < 60) {

      if (mins > 1) {
        obj = Math.round(mins) + " mins ago";
      }
      else {
        obj = Math.round(mins) + " min ago";
      }


    }
    else if (hours < 24) {

      if (hours > 1) {
        obj = Math.round(hours) + " hours ago";
      }
      else {
        obj = Math.round(hours) + " hour ago";
      }

    }
    else {

      if (days > 1) {
        obj = Math.round(days) + " days ago";
      }
      else {
        obj = Math.round(days) + " day ago";
      }

    }



    return obj;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }


  viewFeed(feed: any) {

    this.navCtrl.push("FeedviewPage", { feed: feed });
  }

}
