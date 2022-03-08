import { Gender } from "../types/gender";
import CollegeUser from "./college_user";

export default class Professor extends CollegeUser {

  // object attributes
  subjects: string[] = [];

  constructor(name: string, gender: Gender, subjects: string[]) {
    // this -> current object Professor object 5007

    super(name, gender); // calls the super class constructor
    // Internally
    // CollegeUser.constructor(name, gender, this)

    this.subjects = subjects;
  }

  
}