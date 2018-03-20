import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(e) {

    e.preventDefault();

    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['searchserie']);
    } else {
      window.location.reload();
    }
  }

}
