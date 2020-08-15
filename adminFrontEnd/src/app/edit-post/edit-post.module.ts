import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPostPageRoutingModule } from './edit-post-routing.module';

import { EditPostPage } from './edit-post.page';

import { ComponentsModule } from '../components/components.module';

import { Chart } from 'chart.js';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPostPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditPostPage]
})
export class EditPostPageModule {}
