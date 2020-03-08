let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(score1, score2){
    if(score1>score2)
        return score1 - score2;
    else
        return score2 - score1;
}

function compareGuesses(userGuess, computerGuess, secretNumber){
    if(userGuess > 9){
        alert('Your input is beyond the range');
        return false
    }
    if(getAbsoluteDistance(userGuess, secretNumber) < getAbsoluteDistance(computerGuess, secretNumber)){
        return true;
    }
    else if(Math.abs(secretNumber-userGuess) > Math.abs(secretNumber-computerGuess)){
        return false;
    }
    else{
        return true;
    }
}

function updateScore(winner){
    if(winner === 'human'){
        humanScore++;
    }
    else{
        computerScore++;
    }
}

function advanceRound(){
    currentRoundNumber++;
}
