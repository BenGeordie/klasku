import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Chart } from 'chart.js';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { ComponentsModule } from '../components/components.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    Tab2PageRoutingModule,
    Ng2GoogleChartsModule,
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
