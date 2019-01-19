'use strict';

// Hiding private variables through a closure
// Credit for this example: Philipp Beau (@ze_german)

function createWallet(name, cash) {
  function addCash(amount) {
    cash += amount;
    return this;
  }

  function removeCash(amount) {
    cash -= amount;
    return this;
  }

  function transferInto(wallet, amount) {
    if (cash - amount < 0) {
      console.log('Insufficient funds!');
    } else {
      removeCash(amount);
      wallet.addCash(amount);
    }
    return this;
  }

  function toString() {
    return `Name: ${name}, balance: ${cash}`;
  }

  return {
    addCash: addCash,
    transferInto: transferInto,
    toString: toString
  };
}

const jim = createWallet('Jim', 100);
const sander = createWallet('Sander', 1000);
const yash = createWallet('Yash', 20);

jim.transferInto(sander, 50); // .transferInto(yash, 10);
yash.transferInto(sander, 25);

console.log(jim.toString());
console.log(sander.toString());
console.log(yash.toString());
