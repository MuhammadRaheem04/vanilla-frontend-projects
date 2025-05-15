let canvas = document.querySelector("#tetris");
let scoreboard = document.querySelector("h2");
let ctx = canvas.getContext("2d");
ctx.scale(30, 25); // Scale the canvas to make it easier to work with

const SHAPES = [
  [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ],
  [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 1],
    [1, 1],
  ],
];

const COLORS = [
  "#fff",
  "#9b5fe0",
  "#16a4d8",
  "#60dbe8",
  "#8bd346",
  "#efdf48",
  "#f9a52c",
  "#d64e12",
];

const ROWS = 20;
const COLS = 10;

let shapeObj = null;
let grid = generateGrid(); // Initialize the grid
let score = 0;

function generateRandomShape() {
  const random = Math.floor(Math.random() * SHAPES.length);
  // console.log(SHAPES[random]);
  let shape = SHAPES[random];
  let colorIndex = random + 1;
  let x = 4;
  let y = 0;
  return { shape, colorIndex, x, y };
}

setInterval(newGameState, 500); // Call newGameState every half second

function newGameState() {
  checkGrid();
  if (shapeObj === null) {
    shapeObj = generateRandomShape();
    renderShape();
  }
  moveDown();
}

function checkGrid() {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    let allFilled = true;
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 0) {
        allFilled = false;
      }
    }
    if (allFilled) {
      grid.splice(i, 1); // Remove the filled row
      grid.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // Add a new empty row at the top
      count++;
    }
  }
  if (count == 1){
    score += 10;
  } else if (count == 2){
    score += 30;
  } else if (count == 3){
    score += 50;
  } else if (count > 3){
    score += 100;
  }
  scoreboard.innerHTML = `Score: ${score}`; // Update the score display
}

function renderShape() {
  let shape = shapeObj.shape;
  for (let i = 0; i < shape.length; i++) {
    for (let j = 0; j < shape[i].length; j++) {
      if (shape[i][j] == 1) {
        ctx.fillStyle = COLORS[shapeObj.colorIndex];
        ctx.fillRect(shapeObj.x + j, shapeObj.y + i, 1, 1);
      }
    }
  }
}

function moveDown() {
  if (!collission(shapeObj.x, shapeObj.y + 1)) shapeObj.y += 1;
  else {
    for (let i = 0; i < shapeObj.shape.length; i++) {
      for (let j = 0; j < shapeObj.shape[i].length; j++) {
        if (shapeObj.shape[i][j] == 1) {
          let p = shapeObj.x + j;
          let q = shapeObj.y + i;
          grid[q][p] = shapeObj.colorIndex; // Set the color index in the grid
        }
      }
    }
    if (shapeObj.y <= 0) {
      alert("Game Over!"); // Game over if the shape reaches the top
      grid = generateGrid(); // Reset the grid
      score = 0; // Reset the score
    }
    shapeObj = null; // Reset the shape object
  }
  renderGrid();
}

function moveLeft() {
  if (!collission(shapeObj.x - 1, shapeObj.y)) shapeObj.x -= 1;
  renderGrid();
}

function moveRight() {
  if (!collission(shapeObj.x + 1, shapeObj.y)) shapeObj.x += 1;
  renderGrid();
}

function rotate() {
  let rotatedShape = [];
  let shape = shapeObj.shape;
  for (let i = 0; i < shape.length; i++) {
    rotatedShape.push([]);
    for (let j = 0; j < shape[i].length; j++) {
      rotatedShape[i].push(0);
    }
  }
  for (let i = 0; i < shape.length; i++) {
    for (let j = 0; j < shape[i].length; j++) {
      rotatedShape[i][j] = shape[j][i];
    }
  }
  for (let i = 0; i < rotatedShape.length; i++) {
    rotatedShape[i] = rotatedShape[i].reverse();
  }
  if (!collission(shapeObj.x, shapeObj.y, rotatedShape))
    shapeObj.shape = rotatedShape;
  renderGrid();
}

function collission(x, y, rotatedShape) {
  let shape = rotatedShape || shapeObj.shape;
  for (let i = 0; i < shape.length; i++) {
    for (let j = 0; j < shape[i].length; j++) {
      if (shape[i][j] == 1) {
        let p = x + j;
        let q = y + i;
        if (p >= 0 && p < COLS && q >= 0 && q < ROWS) {
          if (grid[q][p] > 0) {
            return true; // Collision with another shape
          }
        } else {
          return true;
        }
      }
    }
  }
  return false;
}

function generateGrid() {
  let grid = [];
  for (let i = 0; i < ROWS; i++) {
    grid.push([]);
    for (let j = 0; j < COLS; j++) {
      grid[i].push(0);
    }
  }
  return grid;
}

function renderGrid() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      ctx.fillStyle = COLORS[grid[i][j]];
      ctx.fillRect(j, i, 1, 1);
    }
  }
  renderShape();
}

document.addEventListener("keydown", function (e) {
  let key = e.key;
  if (key == "ArrowDown") {
    moveDown();
  } else if (key == "ArrowLeft") {
    moveLeft();
  } else if (key == "ArrowRight") {
    moveRight();
  } else if (key == "ArrowUp") {
    rotate();
  }
});
