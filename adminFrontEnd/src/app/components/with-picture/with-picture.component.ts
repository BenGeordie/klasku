import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-with-picture',
  templateUrl: './with-picture.component.html',
  styleUrls: ['./with-picture.component.scss'],
})
export class WithPictureComponent implements OnInit {

  @Input() title: string;
  @Input() classes;
  @Input() limited: string;

  public down = true;
  public limit : number;
  public needButton : boolean;
  public needLimit : boolean;

  constructor() {
    this.down = true;
   }



  ngOnInit() {
    this.needLimit = (this.limited === 'true');
    console.log(this.needLimit);
    if (this.needLimit === true) {
      this.limit = 3;
      console.log(this.limit);
      this.needButton = true;
    } else {
      this.limit = this.classes.length;
      this.needButton = false;
    }
  }

  flip() {
    this.down = !this.down;
  }

  increaseLimit() {
    this.limit = this.classes.length;
  }

  decreaseLimit() {
    this.limit = 3;
  }

}
