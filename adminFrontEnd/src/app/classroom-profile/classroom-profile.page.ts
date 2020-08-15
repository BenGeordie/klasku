import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classroom-profile',
  templateUrl: './classroom-profile.page.html',
  styleUrls: ['./classroom-profile.page.scss'],
})
export class ClassroomProfilePage implements OnInit {

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
