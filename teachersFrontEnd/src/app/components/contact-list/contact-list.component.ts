import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  @Input() title: string;
  @Input() chats: [];

  constructor() { }

  ngOnInit() {
    console.log(this.title);
    console.log(this.chats);
  }

}
