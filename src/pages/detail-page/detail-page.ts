import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-page',
  templateUrl: 'detail-page.html'
})
export class DetailPage {
  public user = this.navParams.get('user')
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    console.log(this.navParams.data)
  }

  ionViewDidLoad() {
    console.log(`the item is ${this.user}`);
  }

}
