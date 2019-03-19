module.exports = function fizzBuzz(val) {
  if (val % 5 === 0 && val % 3 === 0) {
    return 'fizzbuzz';
  }
  else if (val % 3 === 0) {
    return 'fizz';
  }
  else if (val % 5 === 0) {
    return 'buzz';
  }
  else {
    return val;
  }
};


// 1 - "fizz" dans le cas où le nombre passé en paramètre est un multiple de 3
// 2 - "buzz" dans le cas où le nombre passé en paramètre est un multiple de 5
// 3 - "fizzbuzz" dans le cas où le nombre passé est à la fois un multiple de 3 et de 5
// 4 - Le nombre dans le cas où ce dernier n’est ni un multiple de 3 ni un multiple de 5