import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallApiProvider } from '../../providers/call-api/call-api';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  students: any;
  newStudent:any;

  constructor(public navCtrl: NavController, public callApi: CallApiProvider,public fb:FormBuilder) {
    this.newStudent =fb.group({
      'id':null,
      'nameProduct':null,
      'priceProduct':null,
      'profileImage':null,
      'cartproduct':null
      })
  }

  gocartproduct(){
    this.navCtrl.push('CartproductPage', { id:this.newStudent });
  }

  ionViewDidEnter() {
    this.get();

  }
  get() {
    this.callApi.GetAllstudent().subscribe(data => {
      this.students = data;
      console.log(this.students);

    });
  }
  goInfoPage(id: string) {
    this.navCtrl.push('InfoPage', { id: id });
  }
  goCreatePage() {
    this.navCtrl.push('CreatePage');
  }
  delete(id: string){
    this.callApi.DeleteStudent(id).subscribe(data =>{
      console.log('Deleted');
      this.get();
    })

  }
}
