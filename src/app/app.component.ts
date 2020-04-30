import {Component, OnInit} from '@angular/core';

import { HttpService } from './http.service';
import { MessageFormType } from './MessageType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})

export class AppComponent implements OnInit{

  user: MessageFormType[] = [];

  title = 'ChatAng';
  messages: string[] = [];
  messagesDate: string[] = [];
  login: string;

  constructor(private http: HttpService){}

  ngOnInit(): void {
  }

}
