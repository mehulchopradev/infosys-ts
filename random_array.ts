// function that takes in an array as an input and returns a random element from the array everytime the function is called

// Generic function
function randomness<T>(elements: T[]): T {
  // random number between 0 and length of the array
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
}

const r1: string = randomness(['audi', 'porshe', 'mercedes']);
const r2: number = randomness([10, 5, 3, 6, 7]);

console.log(r1, r2);