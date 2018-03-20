import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  config: any;
  isLogedIn: boolean

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
          if(responce['status'] === 'SUCCESS') {
            localStorage.setItem('userId', responce['data']['id']);
            this.isLogedIn = true;
            this.router.navigate(['searchserie']);
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
}
