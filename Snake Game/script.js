let gameContainer = document.querySelector('.game-container');
let scoreContainer = document.querySelector('.score-container');
let score = 0;

let foodY, foodX;
let snakeY = 12, snakeX = 12;

let snakeBody = [];

let velocityY = 0, velocityX = 0;

function generateFood(){
    foodY = Math.floor(Math.random()* 25) + 1;
    foodX = Math.floor(Math.random()* 25) + 1;
    if(snakeBody.length > 0){
        for(let i = 0; i < snakeBody.length; i++){
            if(snakeBody[i][0] == foodX && snakeBody[i][1] == foodY){
                generateFood();
            }
        }
    }
}

function gameOver(){
    alert("Game Over! Press any key to play again.");
    snakeY = 12;
    snakeX = 12;
    velocityY = 0;
    velocityX = 0;
    snakeBody = [];
    score = 0;
    scoreContainer.innerHTML = `Score: ${score}`;
    generateFood();
}

function randerGame(){
    let updatedGame = `<div class="food" style="grid-area: ${foodY}/ ${foodX};"></div>`;
    if(snakeX == foodX && snakeY == foodY){
        snakeBody.push([foodX, foodY]);
        generateFood();
        score += 10;
        scoreContainer.innerHTML = `Score: ${score}`;
    }

    snakeBody.pop();
    snakeX += velocityX;
    snakeY += velocityY;
    snakeBody.unshift([snakeX, snakeY]);

    if(snakeX <= 0 || snakeX >= 26 || snakeY <= 0 || snakeY >= 26){
        gameOver();
    }

    for(let i = 1; i < snakeBody.length; i++){
        if(snakeBody[i][0] == snakeX && snakeBody[i][1] == snakeY){
            gameOver();
        }
    }

    for(let i = 0; i < snakeBody.length; i++){
        updatedGame += `<div class="snake" style="grid-area: ${snakeBody[i][1]}/ ${snakeBody[i][0]};"></div>`;

    }

    gameContainer.innerHTML = updatedGame;
}

generateFood();
setInterval(randerGame, 150);


document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowUp' && velocityY !== 1){
        velocityX = 0;
        velocityY = -1;
    }else if(event.key === 'ArrowDown' && velocityY !== -1){
        velocityX = 0;
        velocityY = 1;
    }else if(event.key === 'ArrowLeft' && velocityX !== 1){
        velocityX = -1;
        velocityY = 0;
    }else if(event.key === 'ArrowRight' && velocityX !== -1){
        velocityX = 1;
        velocityY = 0;
    }
});