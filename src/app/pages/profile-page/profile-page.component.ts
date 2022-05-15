import { Component, OnInit } from '@angular/core';
import { User } from '../../User';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../Product';
import { PRODUCTS } from '../../mock-products';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  all_products: Product[] = PRODUCTS;

  uname: string = localStorage.getItem('uname') || '';
  user: User = JSON.parse(localStorage.getItem(this.uname) || '');

  xmark_icon = faXmark;
  plus_icon = faPlusCircle;

  constructor() {}

  ngOnInit(): void {}

  add_alergens(val: string) {
    this.user.alergens.push(val);
    localStorage.setItem(this.uname, JSON.stringify(this.user));
    window.location.reload();
  }

  remove_alergen(id: number) {
    this.user.alergens.splice(id, 1);
    localStorage.setItem(this.uname, JSON.stringify(this.user));
    window.location.reload();
  }

  remove_bookmark(id: number) {
    let real_id = this.get_real_id(id);
    localStorage.removeItem(real_id.toString());
    this.user.bookmarks.splice(id, 1);
    localStorage.setItem(this.uname, JSON.stringify(this.user));
    window.location.reload();
  }

  get_real_id(id: number) {
    for (let i = 0; i < this.all_products.length; i++) {
      if (this.user.bookmarks[id] === this.all_products[i]) {
        return i;
      }
    }
    return 0;
  }
}
