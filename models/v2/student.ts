import { Gender } from "../../types/gender";
import CollegeUser from "../college_user";

export default class Student extends CollegeUser {

  marks: number = 0;
  roll: number = 0;

  constructor(name: string, roll: number, gender: Gender, marks: number) {
    // this -> current object 5005 (Student object)

    super(name, gender);
    // Internally
    // CollegeUser.constructor(name, gender, this)

    // this -> current object Student
    this.roll = roll;
    this.marks = marks;
  }

  // override the method
  // redefine the method
  getDetails() {
    return `${super.getDetails()}\nRoll: ${this.roll}`;
  }
}