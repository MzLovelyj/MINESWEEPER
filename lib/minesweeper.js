'use strict';

//npm run build to compile then do node src/minesweeper.js
var printBoard = function printBoard(board) {
    console.log("Current Board:  ");
    // Log 'Current Board: '
    // console.log(board[0]);
    // Log the first element of the board variable
    console.log(board[0].join('|'));
    console.log(board[1].join('|'));
    console.log(board[2].join('|'));
};

var board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

printBoard(board);