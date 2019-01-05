'use strict';

{
  // prettier-ignore
  const boards = {
    level1: [
      ['T', 'T', ' ', 'F'],
      ['T', '', '', ''],
      ['', '', '', ''],
      ['R', '', '', 'W']
    ],
    level2: [
      ['T', 'F', 'T'],
      ['T', '', 'T'],
      ['T', '', 'T'],
      ['T', '', 'T'],
      ['T', '', 'T'],
      ['T', '', 'T'],
      ['T', '', 'T'],
      ['T', 'R', 'T']
    ]
  };

  function createAndAppend(name, parent, text) {
    const elem = document.createElement(name);
    parent.appendChild(elem);
    if (text !== undefined) {
      elem.innerText = text;
    }
    return elem;
  }

  function renderBoard(level) {
    const container = document.getElementById('container');
    // clear any previous content
    container.innerHTML = '';

    const table = createAndAppend('table', container);

    const board = boards[level];

    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
      const row = board[rowIndex];
      const tr = createAndAppend('tr', table);
      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        createAndAppend('td', tr, row[colIndex]);
      }
    }
  }

  function renderFixedParts() {
    const root = document.getElementById('root');
    const header = createAndAppend('header', root);
    const select = createAndAppend('select', header);

    for (const level of Object.keys(boards)) {
      const option = createAndAppend('option', select, level);
      option.setAttribute('value', level);
    }

    select.addEventListener('change', function() {
      renderBoard(select.value);
    });

    const container = createAndAppend('div', root);
    container.setAttribute('id', 'container');
  }

  function main() {
    renderFixedParts();
    renderBoard('level1');
  }

  window.onload = main;
}
