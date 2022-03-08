import Shape from "../utility/shape";

// developer x
export default class Square extends Shape {
  side: number = 0;

  constructor(side: number) {
    super();
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }

  perimeter(): number {
    return 4 * this.side;
  }
}