import Professor from "./models/professor";
import Student from "./models/v2/student";

const s1 = new Student('mehul', 10, 'm', 90);
// Internally
// 1. new -> 5005
// 2. Student.constructor('mehul', 10, 'm', 90, 5005)

const p1 = new Professor('jane', 'f', ['Physics']);
// Internally
// 1. new -> 5007
// 2. Professor.constructor('jane', 'f', ['Physics'], 5007)

// console.log(s1, p1);

console.log(s1.getDetails());

console.log(p1.getDetails());