import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-classroom',
  templateUrl: './admin-classroom.page.html',
  styleUrls: ['./admin-classroom.page.scss'],
})
export class AdminClassroomPage implements OnInit {


  public parentChats = [];
  constructor() { }

  ngOnInit() {
    this.parentChats = [
      {
        name: 'Hengy Setiawan',
        phoneNum: '+12345'
      },
      {
        name: 'Lidia Gunawan',
        phoneNum: '+12345'
      },
      {
        name: 'Bianca Kurniawan',
        phoneNum: '+12345'
      }
    ];
  }

}
