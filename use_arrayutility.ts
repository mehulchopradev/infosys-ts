import { NextGenArray } from "./utility/array";

const n1 = new NextGenArray([5, 6, 10, 3, 4, 7, 8]);
console.log(n1.getElement(2));

n1.updateElement(1, 9);

n1.printAll();

const n2 = new NextGenArray(['audi', 'mercedes', 'porshe']);
console.log(n2.getElement(1));

n2.updateElement(1, 'i10');

n2.printAll();