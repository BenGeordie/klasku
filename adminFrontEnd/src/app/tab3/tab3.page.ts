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

  public schoolTeachers = [];
  public schoolClasses = [];

  constructor(
    private navCtrl: NavController
  ) {
    this.down = true;
  }

  ngOnInit() {
    //title = name of teachers, subtitle = Array of Classes taught by the teacher
    this.schoolTeachers = [
      {
        title : 'Emma Wat Sun',
        subtitle: ['Physics 1A', 'Data Science 1A'],
        imageUrl: 'https://via.placeholder.com/100'
      },
      {
        title : 'Bill Nye',
        subtitle: ['Chemistry', 'Weather'],
        imageUrl: 'https://via.placeholder.com/100'
      },
      {
        title : 'Hubertus Leonardus',
        subtitle: ['Astronomy', 'Dinosaurs'],
        imageUrl: 'https://via.placeholder.com/100'
      }
      ];
      
    this.schoolClasses = [
      //title is name of class, subtitle is teacher
      {
        title : 'Alpha Physics 1A',
        subtitle: ['Emma Wat Sun'],
        imageUrl: 'https://via.placeholder.com/100'
      },
      {
        title : 'Biology 1A',
        subtitle: ['David Summers'],
        imageUrl: 'https://via.placeholder.com/100'
      },
      {
        title : 'Zoology 1A',
        subtitle: ['David Winters'],
        imageUrl: 'https://via.placeholder.com/100'
      }
    ];
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