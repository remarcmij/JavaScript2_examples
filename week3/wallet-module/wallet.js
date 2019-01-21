// Module pattern: see http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
// For this variant, scroll down to Loose Augmentation

// eslint-disable-next-line no-var
var WALLET = (function(mod) {
  'use strict';

  // The createWallet function now takes an optional third parameter that is
  // a function to log messages to an output destination. If not specified
  // console.log will be used.
  function createWallet(name, cash, logFn = console.log) {
    function getName() {
      return name;
    }
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
        logFn(`Can't transfer €${amount.toFixed(2)} from ${name} to ${wallet.getName()}.`);
      } else {
        removeCash(amount);
        wallet.addCash(amount);
        logFn(`Transferred €${amount.toFixed(2)} from ${name} to ${wallet.getName()}.`);
      }
      return this;
    }

    function toString() {
      return `Name: ${name}, balance: €${cash.toFixed(2)}.`;
    }

    function reportBalance() {
      logFn(toString());
      return this;
    }

    return {
      getName,
      addCash,
      transferInto,
      toString,
      reportBalance
    };
  }

  mod.createWallet = createWallet;
  return mod;

  // eslint-disable-next-line no-use-before-define
})(WALLET || {});
