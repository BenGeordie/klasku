import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminClassroomPageRoutingModule } from './admin-classroom-routing.module';

import { ComponentsModule } from '../components/components.module';

import { AdminClassroomPage } from './admin-classroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AdminClassroomPageRoutingModule
  ],
  declarations: [AdminClassroomPage]
})
export class AdminClassroomPageModule {}
