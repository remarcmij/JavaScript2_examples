'use strict';

{
  const todos = [
    {
      task: 'Write a summary HTML/CSS',
      done: false
    },
    {
      task: 'Some web development',
      done: true
    },
    {
      task: 'Fix homework for class10',
      done: false
    },
    {
      task: 'Talk to a lot of people',
      done: false
    },
    {
      task: 'Keep writing summary',
      done: false
    },
    {
      task: 'Some more web development',
      done: false
    },
    {
      task: 'Staring out the window',
      done: false
    },
    {
      task: 'Talk to a lot of people',
      done: false
    },
    {
      task: 'Look at application assignments new students',
      done: false
    }
  ];

  function createClickHandler(li, todo) {
    return function() {
      todo.done = !todo.done;
      li.style.textDecoration = todo.done ? 'line-through' : 'none';
    };
  }

  function render(ul) {
    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];
      const li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = todo.task;
      li.className = 'todo';

      if (todo.done) {
        li.style.textDecoration = 'line-through';
      }

      li.addEventListener('click', createClickHandler(li, todo));
    }
  }

  function main() {
    const root = document.getElementById('root');
    const h1 = document.createElement('h1');
    h1.textContent = 'Maartjes work';
    root.appendChild(h1);
    const ul = document.createElement('ul');
    root.appendChild(ul);

    render(ul);
  }

  window.addEventListener('load', main);
}
