const cells = document.querySelectorAll(".js-cell");
let currentPlayer = "+";
let currentBoard = [null, null, null, null, null, null, null, null, null];
const winnerBoard = document.getElementById('js-winner-board');

const ANSWERS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Add event listerners
const start = () => {
  for (cell of cells) {
    cell.addEventListener("click", onClick);
  }
};

const getPosition = element => {
  return Number.parseInt(element.dataset.cell, 10);
};

const changePlayer = player => {
  if (player === "+") {
    return (currentPlayer = "o");
  }
  return (currentPlayer = "+");
};

const showWinner = (player) => {
  const h3 = document.createElement("h3");
  const content = document.createTextNode(player);
  h3.appendChild(content);
  winnerBoard.appendChild(h3);
  winnerBoard.className = winnerBoard.className + 'active'
}

checkWinnerPlayer = (player) => {
  let winner = checkWin(currentPlayer);
  if (winner) {
    return showWinner(currentPlayer)
  }
  return changePlayer(currentPlayer);
}

const renderPlayer = element => {
  const span = document.createElement("span");
  const content = document.createTextNode(currentPlayer);
  span.appendChild(content);
  element.appendChild(span);
  checkWinnerPlayer(currentPlayer);
};

const fillBoard = position => {
  return (currentBoard[position] = currentPlayer);
};

const removeListener = element => {
  return element.removeEventListener("click", onClick);
};

const onClick = event => {
  const element = event.target;
  const position = getPosition(element);
  fillBoard(position);
  renderPlayer(element);
  removeListener(element);
};

const checkWin = player => {
  return ANSWERS.some(answer => {
    return answer.every(value => {
      return player === currentBoard[value];
    })
  })
};

start();
