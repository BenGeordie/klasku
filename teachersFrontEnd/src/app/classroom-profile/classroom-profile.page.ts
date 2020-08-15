import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; 


@Component({
  selector: 'app-classroom-profile',
  templateUrl: './classroom-profile.page.html',
  styleUrls: ['./classroom-profile.page.scss'],
})
export class ClassroomProfilePage implements OnInit {

  public parentChats = [];

  ngOnInit() {
    this.parentChats = [
      {
        name: 'Hengy Setiawan',
        phoneNum: '+12345'
      },
      {
        name: 'Lidia Gunawan',
        phoneNum: '+12345'
      },
      {
        name: 'Bianca Kurniawan',
        phoneNum: '+12345'
      }
    ];
  }


  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Share Early',
      subHeader: '',
      message: 'Would you like to share your posts from last week now?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'cancel',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          cssClass: 'okay',
          handler: () => {
            console.log('Confirm Okay');
            this.sharePostsEarly();
          }
        }
      ]
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      cssClass: 'frequency-alert',
      header: 'Sharing Frequency',
      inputs: [
        {
          name: 'Share Daily',
          type: 'radio',
          label: 'Share Daily',
          cssClass: 'radio',
          value: 'value1',
        },
        {
          name: 'Share Weekly',
          type: 'radio',
          label: 'Share Weekly',
          cssClass: 'radio',
          value: 'value2',
          checked: true
        },
        {
          name: 'Share Biweekly',
          type: 'radio',
          label: 'Share Biweekly',
          cssClass: 'radio',
          value: 'value3'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          cssClass: 'okay',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  sharePostsEarly() {
    console.log('Sharing Posts Early Now');
  }

  viewClassPhotos() {

  }

}
