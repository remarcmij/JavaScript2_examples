'use strict';

const divisibleBy = numerator => value => value % numerator === 0;

const divisibleBy3 = divisibleBy(3);

console.log(divisibleBy3(8));
console.log(divisibleBy3(9));

console.log(divisibleBy(11)(66));
