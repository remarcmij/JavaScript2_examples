'use strict';

{
  function reminder(message, secs, ul) {
    console.log('entering function reminder');

    // Add reminder after delay
    setTimeout(() => {
      console.log('entering outer timeout callback');
      const li = document.createElement('li');
      li.innerText = message;
      ul.appendChild(li);

      // Remove reminder after further delay
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
    console.log('2. entering function main');

    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
      const ul = document.getElementById('container');
      reminder('Commit before you push', 5, ul);
    });

    console.log('3. leaving function main');
  }

  window.onload = main;

  console.log('1. leaving block');
}
