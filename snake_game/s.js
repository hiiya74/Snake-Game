const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const canvasSize = 400;
canvas.width = canvasSize;
canvas.height = canvasSize;

let snake = [{ x: 160, y: 160 }];
let direction = 'RIGHT';
let food = { x: 100, y: 100 };
let score = 0;
let highScore = localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : 0;
let gameOver = false;
let speed = 600; // Starting speed (200ms per frame)

document.getElementById('highScore').textContent = highScore;
document.addEventListener('keydown', changeDirection);

function gameLoop() {
    if (gameOver) {
        if (confirm("Game Over! Do you want to play again?")) {
            resetGame();
        } else {
            return;
        }
    }

    setTimeout(() => {
        clearCanvas();
        moveSnake();
        checkCollision();
        drawSnake();
        drawFood();
        updateScore();
        gameLoop();
    }, speed); // Variable speed (depends on score)
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moveSnake() {
    const head = { ...snake[0] };

    if (direction === 'RIGHT') head.x += gridSize;
    if (direction === 'LEFT') head.x -= gridSize;
    if (direction === 'UP') head.y -= gridSize;
    if (direction === 'DOWN') head.y += gridSize;

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        if (score == 30) {
            alert("You Won!");
            resetGame();
        } else {
            food = generateFood();
            score++;
            adjustSpeed();
        }
    } else {
        snake.pop();
    }
}

function changeDirection(event) {
    const key = event.keyCode;
    if (key === 37 && direction !== 'RIGHT') direction = 'LEFT';
    if (key === 38 && direction !== 'DOWN') direction = 'UP';
    if (key === 39 && direction !== 'LEFT') direction = 'RIGHT';
    if (key === 40 && direction !== 'UP') direction = 'DOWN';
}

function checkCollision() {
    const head = snake[0];

    if (head.x < 0 || head.y < 0 || head.x >= canvasSize || head.y >= canvasSize || snake.slice(1).some(s => s.x === head.x && s.y === head.y)) {
        gameOver = true;
        updateHighScore();
    }
}

function drawSnake() {
    snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? 'yellow' : 'green'; // Snake head is yellow
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
    });
}

function drawFood() {
    if ((score % 5 === 0)&&(score != 30)) {
        ctx.fillStyle = 'green';
        ctx.fillRect(food.x, food.y, gridSize, gridSize); //  Regular food
    } else if(score == 30) {
        ctx.fillStyle = 'white';
        ctx.fillRect(food.x, food.y, gridSize, gridSize); // Food is now bigger
    }
    else {
        ctx.fillStyle = 'red';
        ctx.fillRect(food.x, food.y, gridSize, gridSize); // Regular food
    }
}

function generateFood() {
    let x = Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize;
    let y = Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize;
    return { x, y };
}

function updateScore() {
    document.getElementById('score').textContent = score;
}

function updateHighScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
        document.getElementById('highScore').textContent = highScore;
    }
}

function adjustSpeed() {
    if (score % 5 === 0) {
        speed -= 100; // Increase the speed every 5 points
    }
}

function resetGame() {
    snake = [{ x: 160, y: 160 }];
    direction = 'RIGHT';
    food = { x: 100, y: 100 };
    score = 0;
    speed = 600; // Reset speed
    gameOver = false;
    gameLoop();
}

gameLoop();