function* pseudoRandom(seed) {
  while (true) yield (seed = (seed * 16807) % 2147483647);
}

let generator = pseudoRandom(1);

for (let i = 0; i < 100; i++) console.log(generator.next().value);
