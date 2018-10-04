'use strict';

// Jim bought these items at the Scheltema book store, Amsterdam on 29/09/2018.
// All prices are in Euros.

const bookStoreReceipt = [
  {
    item: 'Reading glasses',
    priceInclusiveBTW: 34.95,
    percentageBTW: 21
  },
  {
    item: 'The Go Programming Language, Alan A. A. Donovan, Brian W. Kernighan',
    priceInclusiveBTW: 39.95,
    percentageBTW: 6
  },
  {
    item: 'Alleen de wolken, Philip Blom',
    priceInclusiveBTW: 34.90,
    percentageBTW: 6
  }
];

const euroToDollarExchangeRate = 1.17;

// Questions:
// 1. What is the total Euro price incl BTW and excl BTW?
// 2. If these items could be bought tax free what would be the total
//    price in dollars?

