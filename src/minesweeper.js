//npm run build to compile then do node src/minesweeper.js
const generatePlayerBoard =
    //when called, will accept two arguments: the number of rows and number of columns. 
    (numberOfRows, numberOfColumns) => {
        let board = [];
        for (let loopRow = 0; loopRow < numberOfRows; loopRow++) {
            let row = [];
            for (let loopColumn = 0; loopColumn < numberOfColumns; loopColumn++) {
                row.push(' ');
            }
            board.push(row);
        }
        return board;
    }

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = [];
    for (let loopRow = 0; loopRow < numberOfRows; loopRow++) {
        let row = [];
        for (let loopColumn = 0; loopColumn < numberOfColumns; loopColumn++) {
            row.push(null)

        }
        board.push(row);
    }

    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        //random number between zero and the specified number of rows.
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

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
}
const printBoard = board => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
};


let playerBoard = generatePlayerBoard(3, 4);

let bombBoard = generateBombBoard(3, 4, 5);


console.log('Player Board: ')
printBoard(playerBoard);


console.log('Bomb Board: ')
printBoard(bombBoard);