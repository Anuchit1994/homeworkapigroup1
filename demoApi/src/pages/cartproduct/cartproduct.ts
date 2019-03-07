import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { CallApiProvider } from '../../providers/call-api/call-api';

/**
 * Generated class for the CartproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cartproduct',
  templateUrl: 'cartproduct.html',
})
export class CartproductPage {
  newStudent:any;
  Students:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb:FormBuilder,public callApi:CallApiProvider) {
    this.newStudent =fb.group({
      'id':null,
      'nameProduct':null,
      'priceProduct':null,
      'profileImage':null,
      'cartproduct':null
      })
  }

  get() {
    this.callApi.GetAllstudent().subscribe(data => {
      this.Students = data;
      console.log(this.Students);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartproductPage');
  }



}
