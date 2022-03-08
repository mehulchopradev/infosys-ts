// Manager

import Rectangle from "./geometry/rectangle";
import Square from "./geometry/square";
import Shape from "./utility/shape";
import { printStats } from "./utility/stats";

const s1 = new Square(5);
printStats(s1);

const r1 = new Rectangle(7, 3);
printStats(r1);

// const s2 = new Shape(); // will not work since abstract class

// console.log(s1.area());
// console.log(s1.perimeter());