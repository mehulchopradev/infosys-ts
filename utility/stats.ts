// Different team

import Shape from "./shape";

export function printStats(shape: Shape) { // Square, Rectangle
  console.log(shape);
  console.log('Area is: ', shape.area());
  console.log('Perimeter is: ', shape.perimeter());
}