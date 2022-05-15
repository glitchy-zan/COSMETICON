import { Component, OnInit } from '@angular/core';
import { User } from '../../User';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  url: string = '';

  constructor() {}

  ngOnInit(): void {}

  set_url(uname: string, pass: string) {
    if (localStorage.getItem(uname) === null) {
      this.url = 'http://localhost:4200/login';
      window.alert("This username doesn't exists!");
    } else {
      var user: User = JSON.parse(localStorage.getItem(uname) || '{}');
      if (user.password !== pass) {
        this.url = 'http://localhost:4200/login';
        window.alert('The password is incorrect!');
      } else {
        this.url = 'http://localhost:4200/home';
        localStorage.setItem('uname', user.username);
      }
    }
  }
}
