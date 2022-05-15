import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-nav-bar',
  templateUrl: './root-nav-bar.component.html',
  styleUrls: ['./root-nav-bar.component.css'],
})
export class RootNavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  invalid() {
    window.alert("You have to login first!")
  }
}
