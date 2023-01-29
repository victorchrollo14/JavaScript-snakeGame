let foodSound = new Audio('music/food.mp3');
let gameover = new Audio('music/gameover.mp3');
let move = new Audio('music/move.mp3');
let music = new Audio('music/music.mp3');

let board = document.getElementById('board');
let xMin = board.getBoundingClientRect().top;
let xMax = board.getBoundingClientRect().bottom;
console.log(xMin, xMax);