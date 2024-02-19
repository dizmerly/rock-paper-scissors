const choice = ["R", "P", "S"];
let pS;
let cS;


function getComputerChoice(){
    let n = Math.floor(Math.random() * 3);
    return choice[n];
}

function getPlayerChoice(playerChoice){
    playerChoice = prompt("Rock, Paper, Scissors? \n R | P | S");
}



function playRound(){
    pS = getPlayerChoice();
    cS = getComputerChoice();

    if((pS == "R" && cS == "S") || (pS == "P" && cS == "R") || (pS == "S" && cS == "P")){
        return 1;
    
    }

    else if((pS == "R" && cS == "P") || (pS == "S" && cS == "R") || (pS == "P" && cS == "S")){
        return 0; 
    }

    else{
        return -1;
        
    }
}

function playGame(){
    let score = 0; 
    for(let i = 0; i <= 5; i++){
        let result = playRound()

        if(result == 1){
            console.log("Computer chose " + cS + " \nPlayer Wins Round!");
            score++; 
        }
        else if(result == 0){
            console.log("Computer chose " + cS + " \nComputer Wins Round!");
        }
        else{
            console.log("Computer chose " + cS + " \nRound Tied.");
        }
    }

    if(score > 2){
        console.log("Player Wins Game!")
    }
    else{
        console.log("Computer Wins Game!")
    }
}

playGame();