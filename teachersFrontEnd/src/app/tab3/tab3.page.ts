import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public down : boolean = true;
  public lowLimit: number = 3;
  public limit: number = this.lowLimit;

  public classes = [];

  constructor(
    private navCtrl: NavController
  ) {
    this.down = true;
  }

  ngOnInit() {
    this.classes = [
      {
        name : 'ButterFly Class',
        students: ['Hugo', 'Hubert', 'Vian', 'Fino'],
        imageUrl: 'https://via.placeholder.com/100'
      },
      {
        name : 'Caterpillar Class',
        students: ['Andy', 'Buzz', 'Woody', 'Barbie'],
        imageUrl: 'https://via.placeholder.com/100'
      },
      {
        name : 'Physics 1A',
        students: ['Gailelo', 'Newton', 'Woody', 'Barbie'],
        imageUrl: 'https://via.placeholder.com/100'
      },
      {
        name : 'Physics 1B',
        students: ['Andrew', 'Raindy', 'Sebastian', 'Nate'],
        imageUrl: 'https://via.placeholder.com/100'
      }]
  }

  goToChatting() {
    this.navCtrl.navigateForward('tabs/chatting');
  }
  sharingSettings() {
    this.navCtrl.navigateForward('tabs/sharing');
  }

  viewClassDetail() {
    this.navCtrl.navigateForward('tabs/classroom-profile');
  }
}