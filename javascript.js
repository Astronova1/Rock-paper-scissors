
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


    let humanScore = 0 , computerScore = 0, round = 0;
    function playRound(humanSelection){
        computerSelection = getComputerChoice();
        let humanChoice = humanSelection.toLowerCase();
        if (computerSelection=== 'rock'){
             if (humanChoice === 'paper'){
                 div.textContent = 'Paper beast Rock! You Win';
                 humanScore++;
             }
             else if (humanChoice === 'scissors'){
                 div.textContent = 'rock beast scissors. You lost!';
                 computerScore++;
             }
             else{
                 div.textContent = 'It\'s a tie';
             }
        }
        else if (computerSelection === 'paper'){
         if (humanChoice === 'rock'){
             div.textContent = 'paper beats rock. You Lost!';
             computerScore++;
         }
         else if (humanChoice === 'scissors'){
             div.textContent = 'scissors beats paper. You won!';
             humanScore++;
         }
         else {
             div.textContent = "It's a tie";
         }
        }
        else if (computerSelection === 'scissors'){
         if (humanChoice === 'rock'){
             div.textContent = 'rock beats scissors. You Won!';
             humanScore++;
         }
         else if (humanChoice === 'paper'){
             div.textContent = 'scissors beats paper. You lost!';
             computerScore++;
         }
         else {
             div.textContent = 'It\'s a tie';
            }
        }
        round++;

        if (humanScore === 5 || computerScore === 5 ){
            const div = document.createElement("div");
            div.classList.add("final");
            document.body.appendChild(div);
            if (humanScore > computerScore){
                div.innerText = 'You won the Game!';
            }
            else if (computerScore > humanScore){
                div.innerText = 'The Computer Won the Game';
            }
        }
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



const div = document.createElement("div");
div.classList.add("result");
document.body.appendChild(div);

const result = document.querySelector(".result");
const scDiv = document.createElement("div");
document.body.appendChild(scDiv); 

function updateScore(){
    scDiv.innerText = "Your Score: " + humanScore + ' | ' + "Computer Score: " + computerScore;
}

rbtn.addEventListener("click", () => updateScore());


pbtn.addEventListener("click", () => updateScore());


sbtn.addEventListener("click", () => updateScore());
