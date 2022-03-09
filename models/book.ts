// code about code
// applying code to a code
// code that runs behind another code
// Decorators
// a decorator is a function (code)
  // class
  // object attributes
  // method

import Freeze from "../decorators/freeze";
import Logger from "../decorators/logger";

// @Freeze
export default class Book {
  // object attributes
  /* title: string;
  price: number;
  pages: number;

  constructor(title: string, price: number, pages: number) {
    this.title = title;
    this.price = price;
    this.pages = pages;
  } */

  constructor(public title: string, public price: number, public pages: number) {}

  @Logger
  modifyPrice(price: number) {
    console.log('callled', price, this.title);
    this.price = price;
  }
}

const b1 = new Book('book 1', 900, 1000);

b1.modifyPrice(5000);
console.log(b1.price);

// It should not be possible to extend the Book class

/* class Dummy extends Book {

} */