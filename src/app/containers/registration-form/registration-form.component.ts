import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  url: string = '';

  user: User = {
    username: '',
    email: '',
    password: '',
    alergens: [],
    bookmarks: [],
  };

  constructor() {}

  ngOnInit(): void {}

  set_url(uname: string, email: string, pass: string, pass2: string): void {
    if (pass !== pass2) {
      this.url = 'http://localhost:4200/register';
      window.alert("Passwords don't match!");
    } else if (localStorage.getItem(uname) !== null) {
      this.url = 'http://localhost:4200/register';
      window.alert('This username already exists!');
    } else if (!email.includes('@gmail.com')) {
      this.url = 'http://localhost:4200/register';
      window.alert('Wrong email format!');
    } else {
      this.url = 'http://localhost:4200/login';
      this.user.username = uname;
      this.user.email = email;
      this.user.password = pass;
      localStorage.setItem(uname, JSON.stringify(this.user));
    }
  }
}
