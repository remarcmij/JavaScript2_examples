'use strict';

/* global WALLET */
{
  function createAndAppend(tagName, parent, options = {}) {
    const elem = document.createElement(tagName);
    parent.appendChild(elem);
    for (const key of Object.keys(options)) {
      const value = options[key];
      if (key === 'text') {
        elem.textContent = value;
      } else {
        elem.setAttribute(key, value);
      }
    }
    return elem;
  }

  // This function creates a closure
  function createLoggerTo(parent) {
    return function(message) {
      createAndAppend('p', parent, { text: message });
    };
  }

  // Another function that creates a closure
  function createWalletWithLogFn(logFn) {
    // Next line uses ES6 object destructuring syntax.
    // See: http://es6-features.org/#ObjectMatchingShorthandNotation
    const { createWallet } = WALLET;
    return function(name, amount) {
      return createWallet(name, amount, logFn);
    };
  }

  function main() {
    const root = document.getElementById('root');
    const logFn = createLoggerTo(root);
    const createWallet = createWalletWithLogFn(logFn);

    const jim = createWallet('Jim', 100, logFn);
    const sander = createWallet('Sander', 1000);
    const yash = createWallet('Yash', 20);

    jim.transferInto(sander, 50).transferInto(yash, 10);
    yash.transferInto(sander, 25);

    jim.reportBalance();
    sander.reportBalance();
    yash.reportBalance();
  }

  window.onload = main;
}
