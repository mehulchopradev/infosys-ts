import { SalariedIndividual } from "./salaried_individual";


export function calcSalary(individual: SalariedIndividual): number {
  // individual - Professor, Librarian, SupportStaff
  const noOfDaysWorked = individual.getNoOfDaysWorked();
  const costPerDay = individual.getCostPerDay();

  const salary = noOfDaysWorked * costPerDay;
  const professionalTax = 200;
  const salaryAfterPt = salary - professionalTax;
  const tds = 0.1 * salaryAfterPt;

  return salaryAfterPt - tds;
}