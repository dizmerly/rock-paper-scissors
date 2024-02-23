const choice = ["R", "P", "S"];
let pS;
let cS;


function getComputerChoice(){
    let n = Math.floor(Math.random() * 3);
    return choice[n];
}

function getPlayerChoice(selection){
    // playerChoice = prompt("Rock, Paper, Scissors? \n R | P | S");
    if(selection == "Rock"){
        return "R";
    }
    else if(selection == "Paper"){
        return "P";
    }
    else if(selection == "Scissors"){
        return "S";
    }
}




function playRound(selection){
    pS = getPlayerChoice(selection);
    cS = getComputerChoice();

    if((pS == "R" && cS == "S") || (pS == "P" && cS == "R") || (pS == "S" && cS == "P")){
        return 1;
    
    }

    else if((pS == "R" && cS == "P") || (pS == "S" && cS == "R") || (pS == "P" && cS == "S")){
        return 0; 
    }

    else{
        return 0;
        
    }
}


let playerChoice = document.querySelectorAll(".selection .btn")
let computerScore = 0;

let updateScore = (scoreVal) => {
    scoreNum.textContent = score;
    if(score > 4){
        scoreNum.textContent = "You win!";
        scoreNum.setAttribute("font-size" ,"30px")
    }
    else if(computerScore > 4){
        scoreNum.textContent = "Computer wins!";
        scoreNum.setAttribute("font-size" ,"30px")
    }
    else if(scoreVal == 0){
        console.log(computerScore)
        computerScore++;
    }
};


playerChoice.forEach((button) => {
    button.addEventListener('click',(event) => {
        score += playRound(button.id);
        updateScore(score);
        
    }); 
}); 


let score = 0; 
const scoreNum = document.querySelector(".score p");


