// var that keeps track of player's score
var playerScore = 0;

// var that keeps track of computers's score
var computerScore = 0;

window.addEventListener('keypress', function (evt) {
    if (evt.code === 'KeyD') {
        drawCard(1);
        if (computerScore === 0){
            drawCard(2);
            drawCard(2);
            if (computerScore >= 21){
                checkScore(playerScore,computerScore);
            }
        }else if (playerScore === 21 || computerScore === 21 || playerScore > 21 || computerScore > 21){
            checkScore(playerScore,computerScore);
        }
    }else if (evt.code === 'KeyS'){
        console.log("Player stopped at "+ playerScore);
        if (computerScore < 17){
            drawCard(2);
        }
        checkScore(playerScore,computerScore);
    }
    else{
        console.log("Press D to draw a card\nPress S to stop");
    }
});

/**
 * @desc Checks the current score of computer and player. Alerts result at end of game round. 
 * @param int playerScore
 * @param int computerScore
 */

function checkScore(playerScore,computerScore){
    if (playerScore > 21){
        alert("You lose fatty!\nPlayer score: "+playerScore+"\nComputer score: "+computerScore);
        clearScore();
    }else if (playerScore === 21){
        alert("You win!\nPlayer score: "+playerScore+"\nComputer score: "+computerScore);
        clearScore();
    }else if (computerScore > 21){
        alert("Dealer is fat! - You win!\nPlayer score: "+playerScore+"\nComputer score: "+computerScore);
        clearScore();
    }else if (computerScore === 21){
        alert("Dealer wins!\nPlayer score: "+playerScore+"\nComputer score: "+computerScore);
        clearScore();
    }else if (computerScore === playerScore){
        alert("Draw!"+"\nPlayer score: "+playerScore+"\nComputer score: "+computerScore);
        clearScore();
    }else{
        if (playerScore > computerScore){
            alert("You Win!"+"\nPlayer score: "+playerScore+"\nComputer score: "+computerScore);
            clearScore();
        }else{
            alert("You Lose!"+"\nPlayer score: "+playerScore+"\nComputer score: "+computerScore);
            clearScore(); 
        }
    }
}

/**
 * @desc Resets player's and computer's score to zero. Clears the console log, allowing for multiple game rounds. 
 */

function clearScore(){
    playerScore = 0;
    computerScore = 0;
    console.clear();
}

/**
 * @desc Draws a random number (1-11), adds to total score of player/computer and returns relevant message depending on value of param.
 * @param int whosTurn 
 */

function drawCard(whosTurn){
    var random = Math.floor(Math.random()*11)+1;
    if (whosTurn === 1){
    console.log('You drew a '+ random);
    playerScore += random;
    console.log("Player score: "+playerScore);
    }else if (whosTurn === 2){
    console.log('Dealer drew a '+ random);
    computerScore += random;
    console.log("Dealer score: "+computerScore);                                             
    }
}  