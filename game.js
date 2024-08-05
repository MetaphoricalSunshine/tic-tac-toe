//Declares variables and connects them to the html file
const board = document.getElementById('board');
const squares = document.getElementsByClassName('square');
const players = ['X', 'O'];
let currentPlayer = players[0];
const endMessage = document.createElement('h2');
endMessage.textContent = `X's turn!`;
endMessage.style.marginTop = '30px';
endMessage.style.textAlign='center';
board.after(endMessage);

//Creates winning combos, so it knows when a player has won
const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//Just an event listener for the clicky click clicks... and a loopda loop
for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', () => {
        if(squares[i].textContent !== ''){
            return;
        }
//When the game ends, this displays the results
        squares[i].textContent = currentPlayer;
        if(checkWin(currentPlayer)) {
            endMessage.textContent=`Game over! ${currentPlayer} wins!`;
            return;
        }
        if(checkTie()) {
            endMessage.textContent= `Game is tied!`;
            return;
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0] ;
//Displays whose turn it is        
        if(currentPlayer == players[0]) {
            endMessage.textContent= `X's turn!`;
        } else {
            endMessage.textContent= `O's turn!`;
        }     
    })   
}

//Checks for when a player wins
function checkWin(currentPlayer) {
    for(let i = 0; i < winning_combinations.length; i++){
        const [a, b, c] = winning_combinations[i];
        if(squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer){
            return true;
        }
    }
    return false;
}

//Checks for when players tie
function checkTie(){
    for(let i = 0; i < squares.length; i++) {
        if(squares[i].textContent === '') {
            return false;
        }
    }
    return true;
}

//Allows a player to restart at any given time and resets the board and scores
function restartButton() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
    endMessage.textContent=`X's turn!`;
    currentPlayer = players[0];
}
