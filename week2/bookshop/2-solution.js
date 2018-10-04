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

function deductBTW(priceIncBTW, percentBTW) {
  return priceIncBTW / (1 + percentBTW / 100);
}

const totalIncBTW = bookStoreReceipt.reduce((total, item) => {
  return total + item.priceIncBTW;
}, 0);

console.log('Total incl BTW: € ' + totalIncBTW.toFixed(2));

const totalExBTW = bookStoreReceipt.reduce((total, item) => {
  return total + deductBTW(item.priceIncBTW, item.percentBTW);
}, 0);

console.log('Total excl BTW: € ' + totalExBTW.toFixed(2));

const taxFreeTotal = totalExBTW * euroToDollarExchangeRate;

console.log('Tax free total: US$ ' + taxFreeTotal.toFixed(2));
