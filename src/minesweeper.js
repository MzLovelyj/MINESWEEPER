const blankLine = '  |   |  ';
//hardCoded const for blankLine which is the start of the empty board.
console.log('This is what an empty board would look like:');
console.log(blankLine);
console.log(blankLine);
console.log(blankLine);
//I console.log to view an empty board. 

const guessLine = '1 |   |  ';
/* hardCode const for a guessLine 
represents what the board will look like when a player guesses by "clicking"
(selecting) the first square of this row.*/

const bombLine = '  | B |  ';
/* hardCode const for a bombLine 
bombLine represents what the board will look like when a player clicks and reveals a bomb.*/


console.log('This is what a board with a guess and a bomb on it would look like:');
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);
//I console.log to view a board with guessLine,bombLine & blankLine.