'use strict';

function makeGreetFn() {
  const students = ['John', 'Paul', 'George', 'Ringo'];

  return function() {
    students.forEach(student => {
      console.log('Hello ' + student);
    });
  };
}

const greet = makeGreetFn();

greet();
