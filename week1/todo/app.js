'use strict';
{
  const maartjesWork = [
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

  function render(todos, container) {
    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];
      const li = document.createElement('li');
      container.appendChild(li);
      li.innerText = todo.task;
      if (todo.done) {
        li.setAttribute('style', 'text-decoration: line-through');
      }
    }
  }

  function main() {
    const root = document.getElementById('root');
    const h1 = document.createElement('h1');
    h1.innerText = 'Maartjes work';
    root.appendChild(h1);
    const ul = document.createElement('ul');
    root.appendChild(ul);

    render(maartjesWork, ul);
  }

  window.onload = main;
}
