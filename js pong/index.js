const gameBoard = document.querySelector(
    "#gameBoard"
);
const ctx = gameBoard.getContext(
    "2d"
);
const scoreText = document.querySelector(
    "#scoreText"
);
const resetBtn = document.querySelector(
    "#resetBtn"
);
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.Height;
const boardBackground = "forestgreen";
const paddle1Color = "lightblue";
const paddle2Color = "indianred";
const ballColor = "rosegold";
const ballBorderColor = "black";
const ballRadius = 12.5;
const paddlespeed = 50;



