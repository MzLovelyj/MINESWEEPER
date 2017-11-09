'use strict';

//npm run build to compile then do node src/minesweeper.js
var generatePlayerBoard =
//when called, will accept two arguments: the number of rows and number of columns. 
function generatePlayerBoard(numberOfRows, numberOfColumns) {
    var board = [];
    for (var loopRow = 0; loopRow < numberOfRows; loopRow++) {
        var row = [];
        for (var loopColumn = 0; loopColumn < numberOfColumns; loopColumn++) {
            row.push(' ');
        }
        board.push(row);
    }
    return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    var board = [];
    for (var loopRow = 0; loopRow < numberOfRows; loopRow++) {
        var row = [];
        for (var loopColumn = 0; loopColumn < numberOfColumns; loopColumn++) {
            row.push(null);
        }
        board.push(row);
    }

    var numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        var randomRowIndex = Math.floor(Math.random() * numberOfRows);
        //random number between zero and the specified number of rows.
        var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

        if (board[randomRowIndex][randomColumnIndex] !== 'B') {
            board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced++;
        }
        /*An important note:
         The code in your while loop has the potential to place bombs
          on top of already existing bombs. This will be fixed when you 
          learn about control flow.*/
    }
    return board;
};
var printBoard = function printBoard(board) {
    console.log(board.map(function (row) {
        return row.join(' | ');
    }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);

var bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);