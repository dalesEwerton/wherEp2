import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {UserService} from '../../services/user.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  loginFormControl = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(10)
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(16)
  ]);

  matcher = new MyErrorStateMatcher();

  confirmPassword = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  create(e) {
    e.preventDefault;

    const email = e.target.elements[0].value;
    const username = e.target.elements[1].value;
    const password = e.target.elements[2].value;
    const confirmPassword = e.target.elements[3].value;

    if (password !== confirmPassword || email === '' || username === '' || password === '') {
      this.confirmPassword = false;
    } else {
      this.userService.createUser(username, email, password);
    }
  }
}
