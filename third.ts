// module

export {};

type Gender = 'm' | 'f';

const name = 'mehul';
const gender: Gender = 'm';
const roll = 10;
const marks = 90;

// custom data type that describes the structure to be followed by every object / any value in typescript
type Student = {
  name: string,
  gender: string,
  roll: number,
  marks: number,
  address?: string, // optional properties
};


// objects
// attributes - characteristics
const s1: Student = {
  name: 'mehul',
  gender: 'm',
  roll: 10,
  marks: 90,
  address: 'dfkjgndfkg',
}; // object

const s2: Student = {
  name: 'jane',
  gender: 'f',
  roll: 12,
  marks: 98
}; // object

/* const s3: Student = {
  studentName: 'jill',
  gen: 'f',
  roll: '10',
  marks: 90,
} */ // typescript will not pass it and will flag as an error

console.log(s1, s2);
// dot operator

// access object attributes
console.log(s1.name, s1.roll);
console.log(s2.name, s2.roll);

// modify object attributes
s1.marks = 95;
s2.roll = 13;

console.log(s1, s2);

/* const studentName = s2.name;
const studentGender = s2.gender;
const studentMarks = s2.marks;
const studentRoll = s2.roll; */

// object destructuring
const { name: studentName, gender: studentGender, roll: studentRoll, marks: studentMarks } = s2;
console.log(studentName, studentGender, studentMarks, studentRoll);
