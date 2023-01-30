let foodSound = new Audio('music/food.mp3');
let gameover = new Audio('music/gameover.mp3');
let move = new Audio('music/move.mp3');
let music = new Audio('music/music.mp3');

let board = document.getElementById('board');
let xMin = board.getBoundingClientRect().top;
let xMax = board.getBoundingClientRect().bottom;
console.log(xMin, xMax);

let snakef=document.getElementById('snake first');
let snakel=document.getElementById('snake last');
loopTransition()

function snakeAnimation() {
  
    snakel.addEventListener("transitionend", loopTransition, false);
    snakel.addEventListener("webkitTransitionEnd", loopTransition, false);
       snakel.addEventListener("mozTransitionEnd", loopTransition, false);
       snakel.addEventListener("msTransitionEnd", loopTransition, false);
       snakel.addEventListener("oTransitionEnd", loopTransition, false);
         
}
snakeAnimation();

function loopTransition() {
    
        if (snakel.style.opacity == "1") {
            snakel.style.opacity = '0';
            snakef.style.opacity = '1';
                        console.log("hello");

        } else {
            snakef.style.opacity = "0";
            snakel.style.opacity = "1";
        }
   
}
