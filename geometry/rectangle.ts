// developer y

import Shape from "../utility/shape";

export default class Rectangle extends Shape {
  length: number;
  breadth: number;

  constructor(length: number, breadth: number) {
    super();
    this.length = length;
    this.breadth = breadth;
  }

  area(): number {
    return this.length * this.breadth;
  }

  perimeter(): number {
    return 2 * (this.length + this.breadth);
  }
}