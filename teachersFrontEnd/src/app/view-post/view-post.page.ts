import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.page.html',
  styleUrls: ['./view-post.page.scss'],
})
export class ViewPostPage implements OnInit {

  ngOnInit() {
  }

  constructor(public navCtrl: NavController ){
  }

  popView(){
    console.log("please steve wozniak help us");
    this.navCtrl.navigateBack('/route');
  }
}
