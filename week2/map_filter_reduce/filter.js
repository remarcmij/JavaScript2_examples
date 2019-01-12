'use strict';

function filter(arr, predicateFn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicateFn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// eslint-disable-next-line no-extend-native
Array.prototype.myFilter = function(predicateFn) {
  return filter(this, predicateFn);
};

const numbers = [1, 2, 3, 4];
const isEven = x => x % 2 === 0;

console.log('numbers.filter(...) // ->', filter(numbers, isEven));
console.log('filter(numbers, ...) // ->', numbers.filter(isEven));
console.log('numbers.myFilter(...) // ->', numbers.myFilter(isEven));
