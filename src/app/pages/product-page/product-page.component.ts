import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Product';
import { User } from 'src/app/User';
import { PRODUCTS } from '../../mock-products';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as bookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  all_products: Product[] = PRODUCTS;
  id: number = -1;
  id_str: string = '';

  uname: string = localStorage.getItem('uname') || '';
  user: User = JSON.parse(localStorage.getItem(this.uname) || '');

  my_alergens: string[] = [];

  not_booked: boolean = true;
  icon_not_booked = faBookmark;
  icon_booked = bookmark;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.id_str = this.id.toString();

    this.set_my_alergens();
    this.user = JSON.parse(localStorage.getItem(this.uname) || '');

    this.not_booked = this.set_not_booked();
  }

  set_not_booked() {
    if (localStorage.getItem(this.id_str) === null) {
      return true;
    } else {
      return false;
    }
  }

  set_my_alergens() {
    for (let i = 0; i < this.all_products[this.id].ingredients.length; i++) {
      for (let j = 0; j < this.user.alergens.length; j++) {
        if (
          this.all_products[this.id].ingredients[i] === this.user.alergens[j]
        ) {
          this.my_alergens.push(this.user.alergens[j]);
        }
      }
    }
  }

  add_remove_bookmark() {
    if (localStorage.getItem(this.id_str) === null) {
      this.add_bookmark();
    } else {
      this.remove_bookmark();
    }
  }

  add_bookmark() {
    localStorage.setItem(this.id_str, 'booked');
    this.user.bookmarks.push(this.all_products[this.id]);
    localStorage.setItem(this.uname, JSON.stringify(this.user));
    this.not_booked = false;
    window.location.reload();
  }

  remove_bookmark() {
    for (let i = 0; i < this.user.bookmarks.length; i++) {
      if (this.user.bookmarks[i].name === this.all_products[this.id].name) {
        localStorage.removeItem(this.id_str);
        this.user.bookmarks.splice(i, 1);
        localStorage.setItem(this.uname, JSON.stringify(this.user));
        this.not_booked = true;
        window.location.reload();
        return;
      }
    }
  }
}
