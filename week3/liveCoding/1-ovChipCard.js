'use strict';

let credit = 0;
let tripFare = 0;
let checkedIn = false;

function addCredit(amount) {
  // ...
}

function getCredit() {
  // ...
}

function checkIn() {
  // ...
}

function checkOut() {
  // ...
}

function main() {
  addCredit(10);

  console.log('Credit: €' + getCredit().toFixed(2));

  if (checkIn()) {
    setTimeout(() => checkOut(), 8000);
  }
}

main();
