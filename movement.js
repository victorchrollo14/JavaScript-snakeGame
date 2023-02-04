const arrowUp = 38;
const arrowRight = 39;
const arrowDown = 40;
const arrowLeft = 37;
const snake = document.querySelector('.snake');
const head = document.querySelector('.head');
const snakeBody = document.querySelectorAll('.snake-body');
const board = document.getElementById('board');

let x = 0;y=0;
let pause = false;

const upperBound = board.getBoundingClientRect().top;
const lowerBound = board.getBoundingClientRect().bottom;
const leftBound = board.getBoundingClientRect().left;
const rightBound = board.getBoundingClientRect().right;
console.log(upperBound, lowerBound, leftBound, rightBound);

const start = document.querySelector('.strt');
start.addEventListener('click', main);


// 1) move snake in right left top bottom.
// 2) add smooth transition, when you change direction.



window.onkeyup = function (target){
    if(target.keyCode === arrowRight){
        head.classList.add('head-right');
        snakeBody[0].classList.add('corner-left');
    }
    if (target.keyCode === arrowDown){
        head.classList.add('head-right');
        snakeBody[0].classList.add('corner-left');
        pause = true;
        
    }
    if (target.keyCode === arrowUp){
        pause = true;
        head.classList.add('head-left');
        snakeBody[0].classList.add('corner-right');
        
    
    }
    if (target.keyCode === arrowLeft){
        head.classList.add('head-left');
        snakeBody[0].classList.add('corner-right');
    }
    moveSnake(target.keyCode);
}

function main(){
    let snakeRightPos = Math.floor(snake.getBoundingClientRect().right);
    let snakeLeftPos = Math.floor(snake.getBoundingClientRect().left);
    let snakeTopPos = Math.floor(snake.getBoundingClientRect().top);
    let snakeBottomPos = Math.floor(snake.getBoundingClientRect().bottom);
    // console.log(snakeTopPos, snakeBottomPos, snakeLeftPos, snakeRightPos );

    if (snakeTopPos >= upperBound && snakeLeftPos >= leftBound && snakeRightPos <= rightBound && snakeBottomPos < lowerBound){
        if(pause === true){
            return;
        }
        window.requestAnimationFrame(main);
        moveRight();
    }
}


function moveRight(){
    x += 0.5;
    snake.style.left = `${x}%`;
}
















