import { Component, OnInit } from '@angular/core';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  user_icon = faCircleUser;
  filter_icon = faFilter;

  constructor() {}

  ngOnInit(): void {}

  set_search_att(input: string) {
    if (input !== '') {
      if (window.location.pathname === '/search') {
        window.location.reload();
      }
      localStorage.setItem('searched', input);
    } else {
      if (window.location.pathname === '/search') {
        window.location.reload();
      }
      localStorage.removeItem('searched');
    }
  }
}
