import { Gender } from "../types/gender";

export default class CollegeUser {

  // object attributes (default public)
  protected name: string = '';
  gender: Gender = 'm'; 

  constructor(name: string, gender: Gender) {
    // this -> current object Student object / Professor object / subclass object of CollegeUser
    this.name = name;
    this.gender = gender;
  }

  // 
  getDetails() {
    // this -> current object Student / Professor / subclass CollegeUser
    return `Name: ${this.name}\nGender: ${this.gender}`;
  }
}