// module
export {};

// always advisable to declare data types for parameters and return value of a function
// default parameters
function perimeterRectangle(length: number, breadth: number = 2): number {
  // breadth is a default parameter with a value 2
  const p = 2 * (length + breadth);
  return p;
}

let p1: number;
p1 = perimeterRectangle(4, 2);
console.log(p1);

const p2 = perimeterRectangle(6); // breadth to take a default value of 2
console.log(p2);

/*
* Name: mehul
* Gender: m
* Roll: 10
* Marks: 90
*/

// optional parameters
function getDetails(name: string, gender: string, roll: number, marks?: number) {
  // let details = 'Name: ' + name + '\nGender: ' + gender + '\nRoll: ' + roll;
  let details = `Name: ${name}\nGender: ${gender}\nRoll: ${roll}`; // string interpolation

  // const a = marks + 34; // will not work
  // console.log(a);

  if (marks != undefined) { // guard
    // marks must be an optional parameter
    // details += '\nMarks: ' + marks;
    details = `${details}\nMarks: ${marks}`;

    const a = marks + 34; // here it will work
    console.log(a);
  }

  return details;
}

console.log(getDetails('mehul', 'm', 10, 90));
console.log(getDetails('jane', 'f', 12));


// defining a function that can take variable number of parameters (n)
// REST parameters
function nextGenAdd(...args: number[]): number {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
}

console.log(nextGenAdd()); // 0
console.log(nextGenAdd(5)); // 5
console.log(nextGenAdd(5, 7, 3));
console.log(nextGenAdd(5, 6, 3, 4, 7, 8, 9, 2, 10));
// nextGenAdd('emhul', 'dfgg', 'dgdg'); // will not work

// REST arguments

const stats: [number, number] = [5, 4];

// const [ length, breadth ] = stats;
// console.log(perimeterRectangle(length, breadth));

console.log(perimeterRectangle(...stats)); // order of the element sin the tuple was the same as the order of the parameters
// inside the perimeterRectangle()

// ... spread operator

const c1: string[] = ['audi', 'mercedes'];
const c2: string[] = ['i10', 'i20'];

const c3 = [...c1, ...c2];
console.log(c3);

// union types
function concat(x: number|string, y: number|string) {
}

concat(5, 4);
concat('mehul', 'chopra');
concat('mehul', 25);
// concat(true, []); // will not work