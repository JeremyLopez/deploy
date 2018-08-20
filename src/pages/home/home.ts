import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Pro} from "@ionic/pro";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  channelName: string;

  constructor(public navCtrl: NavController) {
    this.getChannelName()
  }

  async getChannelName() {
    const res = await Pro.deploy.getConfiguration();
    console.log(res)

    if (res) this.channelName = res.channel;

  }

}
