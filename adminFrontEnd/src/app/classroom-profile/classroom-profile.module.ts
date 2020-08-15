import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
export class ClassroomProfilePageModule {}
