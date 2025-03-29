
function getComputerChoice(){                   
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

let humanSelection;
let computerSelection;


    let humanScore = 0 , computerScore = 0;
    function playRound(humanSelection){
        computerSelection = getComputerChoice();
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
         else if (humanChoice === 'paper'){
             console.log('scissors beats paper. You lost!')
             computerScore++;
         }
         else {
             console.log('It\'s a tie')
            }
        }
    }

    if (humanScore > computerScore){
        console.log('You won the Game!')
    }
    else if (computerScore > humanScore){
        console.log('The Computer Won the Game')
    }
    else {
        console.log('Nobody won this Game')
    }

    const rbtn = document.querySelector("#rock");
    rbtn.addEventListener("click", () => {
        playRound("rock");
    });

     const pbtn = document.querySelector("#paper");
     pbtn.addEventListener("click", () => {
        playRound("paper"); 
     });

     const sbtn = document.querySelector("#scissors");
     sbtn.addEventListener("click", () => {
        playRound("scissors");
     });
