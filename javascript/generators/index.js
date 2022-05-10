function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let generator = generateSequence();

// let one = generator.next();
// let two = generator.next();
// let three = generator.next();

// for(let value of generator) {
//     console.log(value);
// }

// console.log(three);

console.log([0, ...generator]);
