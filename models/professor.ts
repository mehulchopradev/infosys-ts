import { Gender } from "../types/gender";
import { SalariedIndividual } from "../utility/salaried_individual";
import CollegeUser from "./college_user";

export default class Professor extends CollegeUser implements SalariedIndividual {

  // object attributes
  subjects: string[] = [];
  perDayCost: number;
  noOfDays: number;

  constructor(name: string, gender: Gender, subjects: string[], perDayCost: number, noOfDays: number) {
    // this -> current object Professor object 5007

    super(name, gender); // calls the super class constructor
    // Internally
    // CollegeUser.constructor(name, gender, this)

    this.subjects = subjects;
    this.perDayCost = perDayCost;
    this.noOfDays = noOfDays;
  }

  getCostPerDay(): number {
    return this.perDayCost;
  }

  getNoOfDaysWorked(): number {
    return this.noOfDays;
  }
}