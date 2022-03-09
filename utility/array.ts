// Generic class
export class NextGenArray<T> {
  elements: T[];

  constructor(elements: T[]) {
    this.elements = elements;
  }

  // index => 1 based indexed
  getElement(index: number): T {
    return this.elements[index - 1];
  }

  // index => 1 based index
  updateElement(index: number, element: T): void {
    this.elements[index - 1] = element;
  }

  printAll() {
    for (let element of this.elements) {
      console.log(element);
    }
  }
}