const cells = document.querySelectorAll('.js-cell');
let currentPlayer = '+';
let currentBoard = {
  '+':[],
  'o':[],
};

// Add event listerners
const start = () => {
  for (cell of cells) {
    cell.addEventListener('click', onClick);
  }
}

const getPosition = (element) => {
  return  Number.parseInt(element.dataset.cell, 10);
}

const changePlayer = (player) => {
  if (player === '+') {
    return currentPlayer = 'o';
  }
  return currentPlayer = '+';
}

const renderPlayer = (element) => {
  const span = document.createElement('span');
  const content = document.createTextNode(currentPlayer);
  span.appendChild(content);
  element.appendChild(span);
  changePlayer(currentPlayer);
}

const fillBoard = (position) => {
  currentBoard[currentPlayer][position] = true;
}

const onClick = (event) => {
  const element = event.target;
  const position = getPosition(element);
  fillBoard(position);
  renderPlayer(element);
  element.removeEventListener('click', onClick);
}

start();
