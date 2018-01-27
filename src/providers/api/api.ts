import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {domain} from '../config';
import { Storage } from '@ionic/storage';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http,public storage: Storage) {
    console.log('Hello ApiProvider Provider');
  }

  getFacts(){
    return new Promise((resolve,reject) => {
      this.storage.get('facts').then(facts => {
        if(facts == null){
          this.http.get(domain+"facts").map(res => res.json()).subscribe(res => {
            this.storage.set('facts',JSON.stringify(res));
            resolve(res);
          })
        }else{
          resolve(JSON.parse(facts));
        }
      })
    })
  
  }
  getProducts(){
    return new Promise((resolve,reject) => {
      this.storage.get('products').then(products => {
        if(products == null){
          this.http.get(domain+"products").map(res => res.json()).subscribe(res => {
            this.storage.set('products',JSON.stringify(res));
            resolve(res);
          })
        }else{
          resolve(JSON.parse(products));
        }
      })
    })
   
  }
  getRecepies(){
    return new Promise((resolve,reject) => {
      this.storage.get('recepies').then(recepies => {
        if(recepies == null){
          this.http.get(domain+"recepies").map(res => res.json()).subscribe(res => {
            this.storage.set('recepies',JSON.stringify(res));
            resolve(res);
          })
        }else{
          resolve(JSON.parse(recepies));
        }
      })
    })
  }
  getNews(){
   

    return new Promise((resolve,reject) => {
      this.storage.get('news').then(news => {
        if(news == null){
          this.http.get(domain+"news").map(res => res.json()).subscribe(res => {
            this.storage.set('news',JSON.stringify(res));
            resolve(res);
          })
        }else{
          resolve(JSON.parse(news));
        }
      })
    })
  }
  getOffers(){
    

    return new Promise((resolve,reject) => {
      this.storage.get('offers').then(offers => {
        if(offers == null){
          this.http.get(domain+"offers").map(res => res.json()).subscribe(res => {
            this.storage.set('offers',JSON.stringify(res));
            resolve(res);
          })
        }else{
          resolve(JSON.parse(offers));
        }
      })
    })
  }
  

}
