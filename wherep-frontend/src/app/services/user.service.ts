import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  config: any;
  isLogedIn: boolean;
  userSeries: any[];
  userName: string;

  constructor(private router: Router, private http: HttpClient) {
    this.setConfiguration();
  }

  login(name: string, password: string) {

    const data = JSON.stringify(
      {
        'name': name,
        'password_digest': password
      }
    );


    this.http.post(this.config['loginApi'], data, httpOptions)
      .subscribe(
        (responce) => {
          if (responce['status'] === 'SUCCESS') {
            localStorage.setItem('userId', responce['data']['id']);
            this.isLogedIn = true;
            this.userSeries = responce['series'];
            this.userName = responce['data']['name'];
            this.router.navigate(['homeserie']);
          }

        }, (err) => {
          console.log(err);
          alert(err['error']['message']);
        }
      );
  }

  setConfiguration() {
    this.http.get('../../assets/config.json')
      .subscribe(
        (responce) => {
          this.config = responce;
        });
  }

  createUser(name: string, email: string, password: string) {

    const data = JSON.stringify(
      {
        'name': name,
        'email': email,
        'password_digest': password
      }
    );


    this.http.post(this.config['usersApi'], data, httpOptions)
      .subscribe(
        (responce) => {
          if (responce['status'] === 'SUCCESS') {
            alert('Successful registration');
            window.location.reload();
          }
        }, (err) => {
          console.log(err);
          alert(err['error']['message']);
        }
      );
  }

  removeSerieLocal(title: string) {

    for (let i = 0; i < this.userSeries.length; i++) {
      if (this.userSeries[i].Title === title) {
        this.userSeries.splice(i, 1);
        break;
      }
    }
  }
}
