'use strict';

function delayedGreeting() {
  const students = ['John', 'Paul', 'George', 'Ringo'];

  setTimeout(function cb() {
    students.forEach(student => {
      console.log('Hello ' + student);
    });
  }, 3000);
}

console.log('Calling delayedGreeting');

delayedGreeting();

console.log('Returned from delayedGreeting');

console.log('End of program (I think)');
