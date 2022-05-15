import { Product } from './../../Product';
import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/mock-products';
import { Filter } from '../../Filter';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css'],
})
export class ProductBoxComponent implements OnInit {
  all_products: Product[] = PRODUCTS;
  filtered_products: Product[] = [];

  filter: Filter = {
    ingredients_yes: [],
    ingredients_no: [],
    field: '',
    manufacturer: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.set_filter();
    this.set_filtered_products();
  }

  set_filter() {
    if (localStorage.getItem('fltr') !== null) {
      this.filter = JSON.parse(localStorage.getItem('fltr') || '');
    }
  }

  set_filtered_products() {
    this.set_filtered_products_field();
    this.set_filtered_products_manufacturer();
    this.set_filtered_products_ingredients_yes();
    this.set_filtered_products_ingredients_no();
  }

  set_filtered_products_field() {
    for (let i = 0; i < this.all_products.length; i++) {
      if (
        this.filter.field === '' ||
        this.filter.field === this.all_products[i].field
      ) {
        this.filtered_products.push(this.all_products[i]);
      }
    }
  }

  set_filtered_products_manufacturer() {
    let some_array: Product[] = [];
    for (let i = 0; i < this.filtered_products.length; i++) {
      if (
        this.filter.manufacturer === '' ||
        this.filter.manufacturer === this.filtered_products[i].manufacturer
      ) {
        some_array.push(this.filtered_products[i]);
      }
    }
    this.filtered_products = some_array;
  }

  set_filtered_products_ingredients_yes() {
    if (this.filter.ingredients_yes.length === 0) return;

    let some_array = [];
    for (let i = 0; i < this.filtered_products.length; i++) {
      for (let j = 0; j < this.filtered_products[i].ingredients.length; j++) {
        if (
          this.is_ingredient_included_in_igredients_yes(
            this.filtered_products[i].ingredients[j]
          )
        ) {
          some_array.push(this.filtered_products[i]);
        }
      }
    }
    this.filtered_products = some_array;
  }

  set_filtered_products_ingredients_no() {
    if (this.filter.ingredients_no.length === 0) return;

    let some_array = [];
    loop1: for (let i = 0; i < this.filtered_products.length; i++) {
      for (let j = 0; j < this.filtered_products[i].ingredients.length; j++) {
        if (
          this.is_ingredient_included_in_ingredients_no(
            this.filtered_products[i].ingredients[j]
          )
        ) {
          continue loop1;
        }
      }
      some_array.push(this.filtered_products[i]);
    }
    this.filtered_products = some_array;
  }

  is_ingredient_included_in_igredients_yes(ing: string) {
    for (let i = 0; i < this.filter.ingredients_yes.length; i++) {
      if (this.filter.ingredients_yes[i] === ing) {
        return true;
      }
    }
    return false;
  }

  is_ingredient_included_in_ingredients_no(ing: string) {
    for (let i = 0; i < this.filter.ingredients_no.length; i++) {
      if (this.filter.ingredients_no[i] === ing) {
        return true;
      }
    }
    return false;
  }
}
