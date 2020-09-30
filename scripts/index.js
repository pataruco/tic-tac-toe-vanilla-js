const cells = Array.from(document.querySelectorAll('.grid > div'));

const playerXScoreElement = document.getElementById('player-x-score');
const playerOScoreElement = document.getElementById('player-o-score');

const solutions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let board = [null, null, null, null, null, null, null, null, null];

let playerTurn = 'x';

const changePlayerToPlay = () =>
  playerTurn === 'x' ? (playerTurn = 'o') : (playerTurn = 'x');

let playerXScore = 0;
let playerOScore = 0;

const checkIfPlayerWin = (player) =>
  solutions.some((solution) =>
    solution.every((positionValue) => player === board[positionValue]),
  );

const addScore = (player) => {
  player === 'x' ? playerXScore++ : playerOScore++;
  playerXScoreElement.innerText = playerXScore;
  playerOScoreElement.innerText = playerOScore;
};

const handleClick = (event) => {
  const cellClicked = event.target;
  cellClicked.innerText = playerTurn;
  cellClicked.removeEventListener('click', handleClick);
  const positionPlayed = cells.indexOf(cellClicked);
  board[positionPlayed] = playerTurn;
  const ifPlayerWin = checkIfPlayerWin(playerTurn);

  if (ifPlayerWin) {
    addScore(playerTurn);
  }
  changePlayerToPlay();
};

const addHandleClick = (cell) => {
  cell.addEventListener('click', handleClick);
};

cells.forEach(addHandleClick);

// TODO:

// Limpiar el tablero con el boton de reset
// Elemento
// evento
// ejecucion

// Declarar ganador del match --> el que gane 2 de 3 partidas
