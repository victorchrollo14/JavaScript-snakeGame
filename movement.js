const arrowUp = 38;
const arrowRight = 39;
const arrowDown = 40;
const arrowLeft = 37;
const snake = document.querySelector('.snake');
const head = document.querySelector('.head');
const snakeBody = document.querySelectorAll('.snake-body');


console.log(snake.classList);

// arrow left	37
// arrow up	38
// arrow right	39
// arrow down	40

window.onkeydown = function(target){
    if(target.keyCode === arrowRight){
        head.classList.add('head-right');
        snakeBody[0].classList.add('corner-left');
        
    }
    if (target.keyCode === arrowDown){
        head.classList.add('head-right');
        snakeBody[0].classList.add('corner-left');
    }
    if (target.keyCode === arrowUp){
        head.classList.add('head-left');
        snakeBody[0].classList.add('corner-right');
    }
    if (target.keyCode === arrowLeft){
        head.classList.add('head-left');
        snakeBody[0].classList.add('corner-right');
    }
}












