import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  getData(){
    return this.http.get('http://localhost:3000/messages');
  }

  postData(x: string, idx: number, dt: any) {
    const dataX = {
      id: idx,
      name: JSON.parse(window.localStorage.getItem('user')).name,
      messageText: x,
      dataSend: dt
    };
    return this.http.post('http://localhost:3000/messages', dataX);
  }

  getDataUser() {
    return this.http.get('http://localhost:3000/users');
  }

  regDataUser(idx: number, email1: string, firstname: string, lastname1: string, passw: string) {
    const dataX = {
      id: idx,
      email: email1,
      name: firstname,
      lastname: lastname1,
      password: passw
    };

    return this.http.post('http://localhost:3000/users', dataX);
  }
}
