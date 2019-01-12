'use strict';

const numbers = [1, 2, 3, 4];
let sum;

sum = 0;
numbers.forEach(x => {
  sum += x;
});
console.log('numbers.forEach(...) // ->', sum);

function forEach(arr, func) {
  for (let i = 1; i < arr.length; i++) {
    func(arr[i], i, arr);
  }
}

// eslint-disable-next-line no-extend-native
Array.prototype.forEach = function(func) {
  return forEach(this, func);
};

sum = 0;
numbers.forEach(x => {
  sum += x;
});
console.log('numbers.forEach(...) // ->', sum);
