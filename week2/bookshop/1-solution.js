'use strict';

// Jim bought these items at the Scheltema book store, Amsterdam on 29/09/2018.
// All prices are in Euros.

const bookStoreReceipt = [
  {
    description: 'Reading glasses',
    priceIncBTW: 34.95,
    percentBTW: 21
  },
  {
    description: 'The Go Programming Language, Alan A. A. Donovan, Brian W. Kernighan',
    priceIncBTW: 39.95,
    percentBTW: 6
  },
  {
    description: 'Alleen de wolken, Philip Blom',
    priceIncBTW: 34.90,
    percentBTW: 6
  }
];

const euroToDollarExchangeRate = 1.17;

// Questions:
// 1. What is the total Euro price incl BTW and excl BTW?
// 2. If these items could be bought tax free what would be the total
//    price in dollars?

let totalIncBTW = 0;
for (const item of bookStoreReceipt) {
  totalIncBTW += item.priceIncBTW;
}

console.log('Total incl BTW: € ' + totalIncBTW.toFixed(2));

let totalExBTW = 0;
for (const item of bookStoreReceipt) {
  totalExBTW += item.priceIncBTW * 100 / (100 + item.percentBTW);
}

console.log('Total excl BTW: € ' + totalExBTW.toFixed(2));

const taxFreeTotal = totalExBTW * euroToDollarExchangeRate;
console.log('Tax free total: US$ ' + taxFreeTotal.toFixed(2));
