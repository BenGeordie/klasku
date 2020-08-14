import { Component, OnInit, Input } from '@angular/core';
import { IonItem } from '@ionic/angular';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements OnInit {

  @Input('expanded') expanded;
  @Input('expandHeight') expandedHeight;
  


  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.expanded);
    console.log(this.expandedHeight);
  }

}
