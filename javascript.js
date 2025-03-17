
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

let value = getComputerChoice();
console.log(value);