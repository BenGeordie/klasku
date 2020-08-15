import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertController } from '@ionic/angular';  

import { IonicModule } from '@ionic/angular';

import { ClassroomProfilePageRoutingModule } from './classroom-profile-routing.module';

import { ClassroomProfilePage } from './classroom-profile.page';

import {ComponentsModule} from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ClassroomProfilePageRoutingModule
  ],
  declarations: [ClassroomProfilePage]
})
export class ClassroomProfilePageModule {  
  constructor(public alertController: AlertController) {}
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
}  
