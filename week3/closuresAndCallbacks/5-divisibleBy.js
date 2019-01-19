'use strict';

const divisibleBy = numerator => value => value % numerator === 0;

const isEven = divisibleBy(2);
const isOdd = number => !isEven(number);
const divisibleBy3 = divisibleBy(3);

console.log(1, isEven(8));
console.log(2, divisibleBy3(8));

console.log(3, isOdd(9));
console.log(4, divisibleBy3(9));

console.log(5, divisibleBy(11)(66));
