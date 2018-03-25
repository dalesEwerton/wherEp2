import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  create = false;

  constructor(private userService: UserService, private router: Router) {
    localStorage.clear();
  }

  ngOnInit() {

  }

  login(e) {

    e.preventDefault();

    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    this.userService.login(username, password);
  }

  createUser() {
    this.create = true;
  }

}
