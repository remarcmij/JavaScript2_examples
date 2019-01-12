'use strict';

function reduce(arr, reducerFn, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = reducerFn(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

// eslint-disable-next-line no-extend-native
Array.prototype.myReduce = function(reducerFn, initialValue) {
  return reduce(this, reducerFn, initialValue);
};

const numbers = [1, 2, 3, 4];
const sum = (a, b) => a + b;

console.log('numbers.reduce(...) // ->', numbers.reduce(sum, 0));
console.log('reduce(numbers, ...) // ->', reduce(numbers, sum, 0));
console.log('numbers.myReduce(...) // ->', numbers.myReduce(sum, 0));
