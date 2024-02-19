const choice = ["R", "P", "S"];

function getComputerChoice(){
    let n = Math.floor(Math.random() * 3);
    return choice[n];
}

function getPlayerChoice(playerChoice){
    playerChoice = prompt("Rock, Paper, Scissors? \n R | P | S");
}



function playRound(){
    let pS = getPlayerChoice();
    let cS = getComputerChoice();

    if((pS == "R" && cS == "S") || (pS == "P" && cS == "R") || (pS == "S" && cS == "P")){
        return "Computer chose " + cS + " \nPlayer Wins!";
    }

    else if((pS == "R" && cS == "P") || (pS == "S" && cS == "R") || (pS == "P" && cS == "S")){
        return "Computer chose " + cS + " \nComputer Wins!";
    }

    else{
        return "Computer chose " + cS + " \nGame Tied.";
    }
}

function playGame(){
    for(let i = 0; i <= 5; i++){
        console.log(playRound());
    }
}

playGame();