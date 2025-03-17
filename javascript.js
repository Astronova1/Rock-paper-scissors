
function getComputerChoice(){                   //this function return rock paper of scissor 
   let choice = Math.floor(Math.random() * 3);
   if (choice === 1){
    return 'rock';
   }
   else if (choice === 2){
    return 'paper';
   }
   else {
    return 'scissors';
   }
}

function getHumanChoice(){
    let userChoice = prompt('Enter rock, paper Or scissors');
    return userChoice
}

let humanScore = 0 , computerScore = 0;

function playRound(humanSelection,computerSelection){
   let humanChoice = humanSelection.toLowerCase();
   if (computerSelection=== 'rock'){
        if (humanChoice === 'paper'){
            console.log('Paper beast Rock! You Win');
            humanScore++;
        }
        else if (humanChoice === 'scissors'){
            console.log('rock beast scissors. You lost!');
            computerScore++;
        }
        else{
            console.log('It\'s a tie');
        }
   }
   else if (computerSelection === 'paper'){
    if (humanChoice === 'rock'){
        console.log('paper beats rock. You Lost!');
        computerScore++;
    }
    else if (humanChoice === 'scissors'){
        console.log('scissors beats paper. You won!');
        humanScore++;
    }
    else {
        console.log("It's a tie");
    }
   }
   else if (computerSelection === 'scissors'){
    if (humanChoice === 'rock'){
        console.log('rock beats scissors. You Won!')
        humanScore++;
    }
    if (humanChoice === 'paper'){
        console.log('scissors beats paper. You lost!')
        computerScore++;
    }
    else {
        console.log('It\'s a tie')
    }
   }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
