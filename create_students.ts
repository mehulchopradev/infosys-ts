import Student from "./models/student";

console.log(Student.count);

// const s1 = new Student(); // object
// Internally
// 1. new -> 4004 (RAM)
// 2. Student.constructor(4004)

const s1 = new Student('mehul', 10, 'm', 67);
// Internally
// 1. new -> 4005 (RAM)
// 2. Student.constructor('mehul', 10, 'm', 90, 4005)

console.log(s1.getDetails());
// Internally
// console.log(Student.getDetails(s1))

console.log(Student.count);

console.log(s1.getGrade());
// Student.getGrade(s1)

/* s1.name = 'mehul';
s1.roll = 10;
s1.gender = 'm';
s1.marks = 90; */

const s2: Student = new Student(); // object
s2.marks = 90; // Internally Student.marks(90) (set)

console.log(s2.marks); // Internally Student.marks() (get)
// console.log(s2.#_marks); // not accessible in ts as well as js files

console.log(s2.getDetails());
// Internally
// console.log(Student.getDetails(s2))

// console.log(s1, s2);

console.log(Student.count);

const s3 = Student.newInstance('jill', 12, 'f', 90);
console.log(s3.getDetails());
