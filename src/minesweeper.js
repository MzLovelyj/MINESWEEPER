//npm run build to compile then do node src/minesweeper.js
const printBoard = board => {
    console.log("Current Board:  ");
    // Log 'Current Board: '
    // console.log(board[0]);
    // Log the first element of the board variable
    console.log(board[0].join('|'));
    console.log(board[1].join('|'));
    console.log(board[2].join('|'));
};



const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
];

printBoard(board);
//printing emptyBoard
board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);
//printing Board with the 1 on the 1st row and 2nd element and 
//the last row with the 3 rd element print B