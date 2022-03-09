import Professor from "./models/professor";
import Student from "./models/v2/student";

import { calcSalary } from "./utility/salary";

const s1 = new Student('mehul', 10, 'm', 90);
// Internally
// 1. new -> 5005
// 2. Student.constructor('mehul', 10, 'm', 90, 5005)

const p1 = new Professor('jane', 'f', ['Physics'], 3000, 15);
// Internally
// 1. new -> 5007
// 2. Professor.constructor('jane', 'f', ['Physics'], 5007)

// console.log(s1, p1);

console.log(s1.getDetails());

console.log(p1.getDetails());

const p2 = new Professor('jill', 'f', ['Physics', 'Maths'], 3500, 20);

// calculate the salary of a professor
console.log(calcSalary(p1));
console.log(calcSalary(p2));