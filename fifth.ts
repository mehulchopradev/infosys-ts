// import { perimeterRectangle, areaRectangle } from './lib/geometry';

import Stats, { areaRectangle, perimeterRectangle } from "./lib/geometry";
// import { areaRectangle, perimeterRectangle } from "./lib/geometry";

const x: Stats = {
  length: 6,
  breadth: 10,
};
console.log(x);

console.log(perimeterRectangle({ length: 5, breadth: 3 }));
console.log(areaRectangle({ breadth: 5, length: 7 }));