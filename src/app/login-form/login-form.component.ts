import {Component, Input, OnInit} from '@angular/core';

import { HttpService } from '../http.service';
import { AuthService } from '../auth.service';
import { UserFormType } from '../userType';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [HttpService, AuthService]
})

export class LoginFormComponent implements OnInit {

  userData: UserFormType[] = [];

  constructor(
    private http: HttpService, private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.http.getDataUser().subscribe((data: any) => {
      this.userData = data.map((x) => { return x; });
    });
  }

  check(login, password, event: Event) {
    for (const i of this.userData) {
      if (i.name === login.value && i.password === password.value) {
        window.localStorage.setItem('user', JSON.stringify(i));
        this.authService.login();
        this.router.navigate(['/home']);
      }
    }
  }

  regUser(email, firstname, lastname, passw) {
    this.http.regDataUser(this.userData.length + 1, email, firstname, lastname, passw).subscribe( (data) => {
      this.http.getDataUser().subscribe((data1: any) => {
        this.userData = data1.map((x) => { return x; });
      });
    });
  }
}
