'use strict';

function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i], i, arr);
  }
}

// eslint-disable-next-line no-extend-native
Array.prototype.myForEach = function(func) {
  return forEach(this, func);
};

const numbers = [1, 2, 3, 4];

let sum;

sum = 0;
numbers.forEach(x => {
  sum += x;
});
console.log('numbers.forEach(...) // ->', sum);

sum = 0;
forEach(numbers, x => {
  sum += x;
});
console.log('forEach(numbers, ...) // ->', sum);

sum = 0;
numbers.myForEach(x => {
  sum += x;
});
console.log('numbers.myForEach(...) // ->', sum);
