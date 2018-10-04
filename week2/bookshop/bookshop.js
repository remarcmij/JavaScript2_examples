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

