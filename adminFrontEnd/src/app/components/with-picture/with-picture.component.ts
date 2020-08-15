import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-with-picture',
  templateUrl: './with-picture.component.html',
  styleUrls: ['./with-picture.component.scss'],
})
export class WithPictureComponent implements OnInit {

  @Input() title: string;
  @Input() data: [];
  @Input() limited: string;
  @Input() navigationRoute: string;

  public down = true;
  public limit: number;
  public needButton: boolean;
  public needLimit: boolean;

  constructor(private NavCtrl: NavController) {
    this.down = true;
   }



  ngOnInit() {
    this.needLimit = (this.limited === 'true');
    console.log(this.needLimit);
    console.log(this.data);
    if (this.needLimit === true) {
      this.limit = 3;
      console.log(this.limit);
      this.needButton = true;
    } else {
      this.limit = this.data.length;
      this.needButton = false;
    }
  }

  flip() {
    this.down = !this.down;
  }

  increaseLimit() {
    this.limit = this.data.length;
  }

  decreaseLimit() {
    this.limit = 3;
  }

  navigateTo() {
    this.NavCtrl.navigateForward(this.navigationRoute);
  }

}
