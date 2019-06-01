'use strict';

{
  function reminder(message, secs, ul) {
    console.log('entering function reminder');

    // show reminder after delay
    setTimeout(() => {
      console.log('entering outer timeout callback');
      const li = document.createElement('li');
      li.innerText = message;
      ul.appendChild(li);

      // hide reminder after further delay
      setTimeout(() => {
        console.log('entering inner timeout callback');
        li.parentNode.removeChild(li);
        console.log('leaving inner timeout callback');
      }, 4000);

      console.log('leaving outer timeout callback');
    }, secs * 1000);

    console.log('leaving function reminder');
  }

  function main() {
    console.log('entering function main');

    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
      const ul = document.getElementById('container');
      reminder('Hello world', 5, ul);
    });

    console.log('leaving function main');
  }

  window.onload = main;

  console.log('leaving block');
}
