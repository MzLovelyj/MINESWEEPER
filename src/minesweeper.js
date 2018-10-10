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
    };

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = [];
    for (let loopRow = 0; loopRow < numberOfRows; loopRow++) {
        let row = [];
        for (let loopColumn = 0; loopColumn < numberOfColumns; loopColumn++) {
            row.push(null);

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
    }
    return board;
};

const printBoard = board => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
};
const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
    if (playerBoard[rowIndex][columnIndex] !== ' ') {
        console.log('This tile has already been flipped!');
        return;
    } else if (bombBoard[rowIndex][columnIndex] === 'B') {
        playerBoard[rowIndex][columnIndex] === 'B';

    } else {
        playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(
            bombBoard, rowIndex, columnIndex);
    }
};
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
    const neighborOffsets = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 0],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1]
    ];

    const numberOfRows = bombBoard.length;
    const numberOfColums = bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
        const neighborRowIndex = rowIndex + offset[0];
        const neighborcolumnIndex = columnIndex + offset[1];
        if (
            neighborRowIndex >= 0 &&
            neighborRowIndex < numberOfRows &&
            neighborcolumnIndex >= 0 &&
            neighborcolumnIndex < numberOfColumns
        ) {
            if (bombBoard[neighborRowIndex][neighborcolumnIndex] == 'B') {
                numberOfBombs++;
            }
        }
    });
    return numberOfBombs;
};

let playerBoard = generatePlayerBoard(3, 4);
//3 rows & 4 col

let bombBoard = generateBombBoard(3, 4, 5);


console.log('Player Board: ');
printBoard(playerBoard);


console.log('Bomb Board: ');
printBoard(bombBoard);


console.log('Updated Player Board: ');

printBoard(playerBoard);