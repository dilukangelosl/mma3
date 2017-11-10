import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {



      //data Structure
      var m = moment(new Date());



      //his.now = m.format('YYYY-MM-DDTHH:mm:ss.sssZ')
      this.now = m;

      this.feeds = [{

        image: "https://sc01.alicdn.com/kf/UT8VRLtXvRaXXagOFbXS/Red-Chili-Virgin-Coconut-Oil.jpg",
        title: "Did you Know?",
        publishedDate: "2017-10-23T12:29:10.1010+05:30",
        thumbnail: "https://sc01.alicdn.com/kf/UT8VRLtXvRaXXagOFbXS/Red-Chili-Virgin-Coconut-Oil.jpg",
        content: "",
        likes: [
          {
            time: "",
            user: ""
          },

          {
            time: "",
            user: ""
          },

          {
            time: "",
            user: ""
          }


        ],
        comments: [

          {
            user: { userid: '12', image: 'http://shinetheme.com/demosd/ipressa/wp-content/uploads/2014/03/09_team.png', name: 'Tom Angelo' },
            comment: "Nice Post",
            datetime: "2017-02-23T12:29:10.1010+05:30"
          },
          {
            user: { userid: '12', image: 'http://trendingtemplates.com/demos/wp-learnplus/wp-content/uploads/2015/02/student_011-1.png', name: 'Rick Johnson' },
            comment: "Wow",
            datetime: "2017-02-23T12:40:10.1010+05:30"
          },
          {
            user: { userid: '12', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJYPSMGhMGufMLjnP9gIzKSNVZfHDi54dQPDerXQqvOtztJIx', name: 'Chamara Junior' },
            comment: "Add me please XD",
            datetime: "2017-02-23T12:50:10.1010+05:30"
          }
        ]

      },

      {

        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVR783TxjkKWCce1BHa0MjLkWVF8iTrezNc9h1pXwv2dUGZ-4X",
        title: "Comment Now !!",
        publishedDate: "2017-02-20T13:29:10.1010+05:30",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVR783TxjkKWCce1BHa0MjLkWVF8iTrezNc9h1pXwv2dUGZ-4X",
        content: "",
        likes: [
          {
            time: "",
            user: ""
          },

          {
            time: "",
            user: ""
          },

          {
            time: "",
            user: ""
          }


        ],
        comments: [

          {
            user: { userid: '12', image: 'http://shinetheme.com/demosd/ipressa/wp-content/uploads/2014/03/09_team.png', name: 'Tom Angelo' },
            comment: "Nice Post",
            datetime: "2017-02-23T12:29:10.1010+05:30"
          },
          {
            user: { userid: '12', image: 'http://trendingtemplates.com/demos/wp-learnplus/wp-content/uploads/2015/02/student_011-1.png', name: 'Rick Johnson' },
            comment: "Wow",
            datetime: "2017-02-23T12:40:10.1010+05:30"
          },
          {
            user: { userid: '12', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJYPSMGhMGufMLjnP9gIzKSNVZfHDi54dQPDerXQqvOtztJIx', name: 'Chamara Junior' },
            comment: "Add me please XD",
            datetime: "2017-02-23T12:50:10.1010+05:30"
          },
          {
            user: { userid: '12', image: 'http://endlesstheme.com/simplify1.0/images/profile/profile5.jpg', name: 'Sujee Martin' },
            comment: "love this <3",
            datetime: "2017-02-23T12:55:10.1010+05:30"
          }
        ]

      },

      {

        image: "https://www.marinacookingoil.com/images/800/564/media-poster-3.jpg?h=264cb780",
        title: "Marina Spread, The Best Choice",
        publishedDate: "2017-02-20T14:29:10.1010+05:30",
        thumbnail: "https://www.marinacookingoil.com/images/800/564/media-poster-3.jpg?h=264cb780",
        content: "",
        likes: [
          {
            time: "",
            user: ""
          },

          {
            time: "",
            user: ""
          },

          {
            time: "",
            user: ""
          }


        ],
        comments: [

          {
            user: { userid: '12', image: 'http://shinetheme.com/demosd/ipressa/wp-content/uploads/2014/03/09_team.png', name: 'Tom Angelo' },
            comment: "Nice Post",
            datetime: "2017-02-23T12:29:10.1010+05:30"
          },
          {
            user: { userid: '12', image: 'http://trendingtemplates.com/demos/wp-learnplus/wp-content/uploads/2015/02/student_011-1.png', name: 'Rick Johnson' },
            comment: "Wow",
            datetime: "2017-02-23T12:40:10.1010+05:30"
          }
        ]

      }

      ];




    }

     getTime(endTime:any){

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


    viewFeed(feed:any)
    {

      this.navCtrl.push("FeedviewPage", { feed: feed });
    }

  }
