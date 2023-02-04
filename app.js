let foodSound = new Audio('music/food.mp3');
let gameover = new Audio('music/gameover.mp3');
let move = new Audio('music/move.mp3');
let music = new Audio('music/music.mp3');

let speed = 2;
let lastPaintTime = 0;
let x = 5.8; y = 0;


// let snakef=document.getElementById('snake first');
// let snakel=document.getElementById('snake last');
// loopTransition()

// function snakeAnimation() {
  
//     snakel.addEventListener("transitionend", loopTransition, false);
//     snakel.addEventListener("webkitTransitionEnd", loopTransition, false);
//        snakel.addEventListener("mozTransitionEnd", loopTransition, false);
//        snakel.addEventListener("msTransitionEnd", loopTransition, false);
//        snakel.addEventListener("oTransitionEnd", loopTransition, false);
         
// }
// snakeAnimation();

// function loopTransition() {
    
//         if (snakel.style.opacity == "1") {
//             snakel.style.opacity = '0';
//             snakef.style.opacity = '1';
//                         console.log("hello");

//         } else {
//             snakef.style.opacity = "0";
//             snakel.style.opacity = "1";
//         }
   
// }

// animation frame

function main(ctime){
    window.requestAnimationFrame(main);
    if(ctime - lastPaintTime > 1/speed){
        return;
    }
    lastPaintTime = ctime;
    console.log(ctime);
    gameEngine();
}





function gameEngine(){
    // part 1: Updating the snake array & food.
    

    // part 2: render the snake and food.
}

