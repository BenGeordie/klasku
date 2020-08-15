import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPagePageRoutingModule } from './login-page-routing.module';

import { LoginPagePage } from './login-page.page';

import {ComponentsModule} from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    LoginPagePageRoutingModule
  ],
  declarations: [LoginPagePage]
})
export class LoginPagePageModule {}
