import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searched-page',
  templateUrl: './searched-page.component.html',
  styleUrls: ['./searched-page.component.css']
})
export class SearchedPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("curr", window.location.href);
  }

}
