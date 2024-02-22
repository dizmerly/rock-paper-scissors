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


let playerChoice = document.querySelectorAll(".selection .btn")

playerChoice.forEach((button) => {
    button.addEventListener('click',(event) => {
        console.log("clicked");
    }); 

}); 