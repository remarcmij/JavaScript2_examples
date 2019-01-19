'use strict';

function map(arr, mapFn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const mappedValue = mapFn(arr[i], i, arr);
    result.push(mappedValue);
  }
  return result;
}

// eslint-disable-next-line no-extend-native
Array.prototype.myMap = function(mapFn) {
  return map(this, mapFn);
};

const numbers = [1, 2, 3, 4];
const square = x => x * x;

console.log('map(numbers, ...) // ->', map(numbers, square));
console.log('numbers.map(...) // ->', numbers.map(square));
console.log('numbers.myMap(...) // ->', numbers.myMap(square));
