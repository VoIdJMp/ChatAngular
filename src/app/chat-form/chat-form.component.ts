import {Component, Input, OnInit, Output} from '@angular/core';

import { HttpService } from '../http.service';
import { MessageFormType } from '../MessageType';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css'],
  providers: [HttpService, AuthService]
})

export class ChatFormComponent implements OnInit {

  @Input() messages: string[];
  @Input() messagesDate: string[];
  messageUser: string[];
  login: string[] = [];

  constructor(private http: HttpService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if (window.localStorage.getItem('user') === null) { this.router.navigate(['/']); }

    this.http.getData().subscribe((data: any) => {
      this.messagesDate = data.map((x) => { return x.dataSend; });
      this.messages = data.map((x) => { return x.messageText; });
      this.messageUser = data.map((x) => { return x.name; });
    });

    this.http.getDataUser().subscribe( (data: any) => {
      this.login = data.map((x) => { return x.name; });
    });
  }

  onClick(x: any) {
    this.messages.push(x);
    let dt = new Date();
    this.http.postData(x, this.messages.length, dt).subscribe(data => {
      this.http.getData().subscribe((data1: any) => {
        this.messagesDate = data1.map((x) => { return x.dataSend; });
        this.messages = data1.map(x => { return x.messageText; });
        this.messageUser = data1.map((x) => { return x.name; });
      });
    });
  }

  ExitFromLogin() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
