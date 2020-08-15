import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminTeacherPageRoutingModule } from './admin-teacher-routing.module';
import { ComponentsModule } from '../components/components.module';

import { AdminTeacherPage } from './admin-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AdminTeacherPageRoutingModule
  ],
  declarations: [AdminTeacherPage]
})
export class AdminTeacherPageModule {}
