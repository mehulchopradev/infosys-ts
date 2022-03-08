type Gender = 'm' | 'f';

export default class Student {

  // object attributes
  name: string = '';
  roll: number = 0;
  gender: Gender = 'm';
  // private _marks: number = 0; // soft private
  #_marks: number = 0; // hard private

  // class attribute
  static count: number = 0;

  // default one
  // function that gets called only during object creation (new)
  // function that just does the job of initializing the attributes of an object
  /* constructor(this) {
    // this -> s1, s2, s3, current object
    // this -> reserver keyword
  } */

  // user defined constructor
  constructor(name?: string, roll?: number, gender: Gender = 'm', marks: number = 0) {
    // this -> current object reference (implicit parameter)

    // access static variable directly using the class name
    Student.count++;

    // initializing the attributes of an object
    this.name = name != undefined ? name : '';
    this.roll = roll != undefined ? roll : 0;
    this.gender = gender;
    this.marks = marks; // Internally Student.marks(marks)

    // implicitly returns this (current object)
    // return this;
  }

  static newInstance(name: string, roll: number, gender: Gender, marks: number): Student {
    // console.log(this); // class object
    return new Student(name, roll, gender, marks);
  }

  // getter and setter
  set marks(m: number) {
    if (m < 0 || m > 100) {
      console.log('Error in assigning marks');
    } else {
      this.#_marks = m;
    }
  }

  get marks() {
    return this.#_marks;
  }


  getDetails(): string {
    // this -> current object reference (implicit parameter) s1, s2
    return `Name: ${this.name}\nRoll: ${this.roll}\nGender: ${this.gender}\nMarks: ${this.marks}`; // Student.marks() (get)
  }

  getGrade(): string {
    // this -> current object
    /*
    * >= 70 - A
    * >= 60 - B
    * >= 40 - C
    * < 40 - F
    * > 100 or < 0 - I
    */

    const marks = this.marks;
    let grade: string;
    if (marks > 100 || marks < 0) {
      grade = 'I';
    } else if (marks >= 70) {
      grade = 'A';
    } else if (marks >= 60) {
      grade = 'B';
    } else if (marks >= 40) {
      grade = 'C';
    } else {
      grade = 'F';
    }

    return grade;
  }
}