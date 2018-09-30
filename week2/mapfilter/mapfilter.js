'use strict';

// Example implementation of map, filter, forEach
// See also: https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/map_filter.md

const numbers = [1, 2, 3, 4];

function myMap(arr, mapFn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const mappedValue = mapFn(arr[i]);
    result.push(mappedValue);
  }
  return result;
}

console.log(myMap(numbers, x => x * x));
console.log(numbers.map(x => x * x));

function myFilter(arr, predicateFn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicateFn(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(myFilter(numbers, x => x % 2 === 0));
console.log(numbers.filter(x => x % 2 === 0));

function myForEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

let sum = 0;
myForEach(numbers, x => sum += x);
console.log(sum);

sum = 0;
numbers.forEach(x => sum += x);
console.log(sum);
