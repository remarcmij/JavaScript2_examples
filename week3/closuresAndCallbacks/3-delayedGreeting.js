'use strict';

function delayedGreeting(greeting) {
  const students = ['John', 'Paul', 'George', 'Ringo'];

  setTimeout(function () {
    students.forEach(student => {
      console.log(greeting + ' ' + student);
    });
  }, 2000);
}

console.log('Calling delayedGreeting');

delayedGreeting('Salam');
delayedGreeting('Hola');

console.log('Returned from delayedGreeting');

console.log('End of program (I think)');

