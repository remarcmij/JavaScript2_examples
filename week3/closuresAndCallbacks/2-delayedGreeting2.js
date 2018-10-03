'use strict';
// This 'closure' is what remains after delayedGreeting returns.
// The students array is 'captured' by the anonymous function passed to setTimeout.
// This anonymous function is executed when the timer fires after 3 seconds.

const students = ['John', 'Paul', 'George', 'Ringo'];

function cb() {
  students.forEach(student => {
    console.log('Hello ' + student);
  });
}


cb(); // <-- executed after 3 second
