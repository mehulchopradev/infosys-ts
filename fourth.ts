// module

export {};

type Stats = {
  length: number,
  breadth: number,
}

// object destructuring
function areaRectangle({ length, breadth }: Stats): number {
  return length * breadth;
}

// console.log(areaRectangle(5, 4));
// console.log(areaRectangle(5.4, 5.3));
console.log(areaRectangle({ length: 5.4, breadth: 5.3 }));
console.log(areaRectangle({ breadth: 5.3, length: 5.4 }));

// console.log(areaRectangle({ len: 4, breadth: 5 })); // will not work