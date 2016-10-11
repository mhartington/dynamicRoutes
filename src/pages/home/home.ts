import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail-page/detail-page';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items: Array<{ index: number, description?: string }> = [];
  public detail = DetailPage
  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 20; i++) {
      this.items[i] = {
        index: i,
        description: `this is item ${i}`
      }
    }
  }

  pushPage(item){
    this.navCtrl.push(DetailPage, {
      'user': item
    })
  }

}
