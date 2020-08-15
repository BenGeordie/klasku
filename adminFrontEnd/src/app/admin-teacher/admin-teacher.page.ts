import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.page.html',
  styleUrls: ['./admin-teacher.page.scss'],
})
export class AdminTeacherPage implements OnInit {
  public classes = [];

  constructor() { }

  ngOnInit() {
    this.classes = [
      {
        title : 'ButterFly Class',
        subtitle: ['Hugo', 'Hubert', 'Vian', 'Fino'],
        imageUrl: 'https://via.placeholder.com/100'
      },
      {
        title : 'Caterpillar Class',
        subtitle: ['Andy', 'Buzz', 'Woody', 'Barbie'],
        imageUrl: 'https://via.placeholder.com/100'
      },
      {
        title : 'Physics 1A',
        subtitle: ['Gailelo', 'Newton', 'Woody', 'Barbie'],
        imageUrl: 'https://via.placeholder.com/100'
      },
      {
        title : 'Physics 1B',
        subtitle: ['Andrew', 'Raindy', 'Sebastian', 'Nate'],
        imageUrl: 'https://via.placeholder.com/100'
      }];
  }

}
