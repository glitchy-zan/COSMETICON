import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { PRODUCTS } from '../../mock-products';
import { faAngleDown, faL } from '@fortawesome/free-solid-svg-icons';
import { Filter } from 'src/app/Filter';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css'],
})
export class FilterFormComponent implements OnInit {
  url: string = '';
  all_products: Product[] = PRODUCTS;

  all_ingredients: string[] = [];
  all_fields: string[] = [];
  all_manufacturers: string[] = [];

  i_yes_cond: boolean = false;
  i_no_cond: boolean = false;
  f_cond: boolean = false;
  m_cond: boolean = false;

  arrow_icon = faAngleDown;
  check_icon = faCheck;

  filter: Filter = {
    ingredients_yes: [],
    ingredients_no: [],
    field: '',
    manufacturer: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.set_filter();

    this.all_ingredients = this.get_all_ingredients();
    this.all_fields = this.get_all_fields();
    this.all_manufacturers = this.get_all_manufacturers();
  }

  is_ingredient_included_in_ingredient_yes(ing: string) {
    for (let i = 0; i < this.filter.ingredients_yes.length; i++) {
      if (this.filter.ingredients_yes[i] === ing) {
        return true;
      }
    }
    return false;
  }

  is_ingredient_included_in_ingredient_no(ing: string) {
    for (let i = 0; i < this.filter.ingredients_no.length; i++) {
      if (this.filter.ingredients_no[i] === ing) {
        return true;
      }
    }
    return false;
  }

  filter_open_close_1() {
    if (this.i_yes_cond) {
      this.i_yes_cond = false;
    } else {
      this.i_yes_cond = true;
    }
  }

  filter_open_close_2() {
    if (this.i_no_cond) {
      this.i_no_cond = false;
    } else {
      this.i_no_cond = true;
    }
  }

  filter_open_close_3() {
    if (this.f_cond) {
      this.f_cond = false;
    } else {
      this.f_cond = true;
    }
  }

  filter_open_close_4() {
    if (this.m_cond) {
      this.m_cond = false;
    } else {
      this.m_cond = true;
    }
  }

  set_filter() {
    if (localStorage.getItem('fltr') !== null) {
      this.filter = JSON.parse(localStorage.getItem('fltr') || '');
    }
  }

  set_filter_1(id: number) {
    for (let i = 0; i < this.filter.ingredients_yes.length; i++) {
      if (this.filter.ingredients_yes[i].includes(this.all_ingredients[id])) {
        this.filter.ingredients_yes.splice(i, 1);
        localStorage.setItem('fltr', JSON.stringify(this.filter));
        return;
      }
    }
    this.filter.ingredients_yes.push(this.all_ingredients[id]);
    localStorage.setItem('fltr', JSON.stringify(this.filter));
  }

  set_filter_2(id: number) {
    for (let i = 0; i < this.filter.ingredients_no.length; i++) {
      if (this.filter.ingredients_no[i].includes(this.all_ingredients[id])) {
        this.filter.ingredients_no.splice(i, 1);
        localStorage.setItem('fltr', JSON.stringify(this.filter));
        return;
      }
    }
    this.filter.ingredients_no.push(this.all_ingredients[id]);
    localStorage.setItem('fltr', JSON.stringify(this.filter));
  }

  set_filter_3(id: number) {
    if (this.filter.field === this.all_fields[id]) {
      this.filter.field = '';
      localStorage.setItem('fltr', JSON.stringify(this.filter));
    } else {
      this.filter.field = this.all_fields[id];
      localStorage.setItem('fltr', JSON.stringify(this.filter));
    }
  }

  set_filter_4(id: number) {
    if (this.filter.manufacturer === this.all_manufacturers[id]) {
      this.filter.manufacturer = '';
      localStorage.setItem('fltr', JSON.stringify(this.filter));
    } else {
      this.filter.manufacturer = this.all_manufacturers[id];
      localStorage.setItem('fltr', JSON.stringify(this.filter));
    }
  }

  set_url() {
    this.url = localStorage.getItem('curr') || '';
  }

  get_all_ingredients() {
    let ingredients = [];
    for (let i = 0; i < this.all_products.length; i++) {
      for (let j = 0; j < this.all_products[i].ingredients.length; j++) {
        ingredients.push(this.all_products[i].ingredients[j]);
      }
    }
    return [...new Set(ingredients)];
  }

  get_all_fields() {
    let fields = [];
    for (let i = 0; i < this.all_products.length; i++) {
      fields.push(this.all_products[i].field);
    }
    return [...new Set(fields)];
  }

  get_all_manufacturers() {
    let manufacturers = [];
    for (let i = 0; i < this.all_products.length; i++) {
      manufacturers.push(this.all_products[i].manufacturer);
    }
    return [...new Set(manufacturers)];
  }
}
