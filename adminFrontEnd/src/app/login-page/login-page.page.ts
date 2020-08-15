import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  //for shaun... so this gets acctivated when login is pressed
  login() {
    this.navCtrl.navigateForward('tabs');
  }

  ngOnInit() {
  }

}
