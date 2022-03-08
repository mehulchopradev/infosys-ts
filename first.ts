// module
export {};

// variables - data
// automatically infer the data type of this variable based on value that u assign (string)
const name = 'mehul'; // scope will be block scoped. if, else if, for, while, but cannot do reassignment for the entire scope

// explicitly give data type
let message: string;

// message = 1; // will give an error

message = 'Good morning';

let age = 35; // automatically infer to number

let pi: number = 3.14;

let isLightsOn: boolean;

// isLightsOn = 'true'; // will give an error

isLightsOn = true;
isLightsOn = false;
// isLightsOn = 1; // will give an error
// name = 67; // will give an error

console.log(name);
console.log(age);

// reassigning
// name = 'jane'; // will not work
// console.log(name);

// Precedence
// 1. const
// 2. let
// 3. var (avoid this)

// arrays
// used to store homogenous data
const marks = [10, 10, 5, 6, 5, 4, 10, 1]; // automatic inference number[]

// const cars = []; // any[] automatically inferred by typescript
const cars: string[] = [];
cars.push('i10');
cars.push('i20');
// cars.push(45); // will not work

console.log(cars);

// array destructuring
const [ c1, c2 ] = cars;
console.log(c1);
console.log(c2);

// marks[0] = 'mehul'; // will not work
marks[0] = 3;

// tuple
// used to store hetrogenous data
const s1: [string, number, string, number] = ['mehul', 10, 'm', 78];
console.log(s1);

console.log(s1[0]);
s1[1] = 34;
console.log(s1);

// s1[1] = '56'; // will not work

/* const studentName = s1[0];
const rollNo = s1[1];
const gender = s1[2];
const studentMarks = s1[3]; */

// tuple destructuring
const [ studentName, rollNo, gender, studentMarks ] = s1;

console.log(studentName);
console.log(rollNo);
console.log(gender);
console.log(studentMarks);

// union type
let rt: number | string;

rt = 9;
rt = 'mehul';

// rt = []; // will not work