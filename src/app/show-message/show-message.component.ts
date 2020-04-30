import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})
export class ShowMessageComponent implements OnInit {

  @Input() messages: string[];
  @Input() messagesDate: string[];
  @Input() messageUser: string[];

  name: string;

  constructor() {}

  ngOnInit(): void {
    this.name =  JSON.parse(window.localStorage.getItem('user')).name;
  }

}
