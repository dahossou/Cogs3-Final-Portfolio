// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
balance = 0;  // initial value for the CPU (Player 2)
var die1Image = new Image();
var die2Image = new Image();


function rollDice() {
  

    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // set the dice images based on the roll
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
    
}  

function updateBalance(){
  document.querySelector("#balance").textContent = "Balance: " + balance + " coins";
}


function whoWon() {
    // in h3 report how much money was won or lost and the balance
    if (dieSum <= 5){ 
      outcome = "You lose, please pay me " + 5 + " coins.";
      balance -= 5;
    } else if (dieSum >= 9){
      outcome = "You win, I pay you " + 5 + " coins.";
      balance += 5;
    } else {
      outcome = "Its a draw, nobody wins or loses.";
    }

    // Report the outcome:
    banner ="Latest Roll: " + die1 + " + " + die2 + " is: " + dieSum;
    document.querySelector("h3").innerHTML = banner + "<br>" + outcome + "<br>" + "Current Balance: " + balance + " coins";

    updateBalance();
}


function letsPlay(){

  numRolls = parseInt(prompt("How many times would you like to play?"));

  balance = 0; 

  for(let i = 0; i < numRolls; i++){  
  rollDice();
  whoWon();
  }

  if(balance > 0){
    message = "That ends it! Player 1 (you) won the game, with a balance of " + balance;
  }
  else if(balance < 0){
    message = "That ends it! Player 2 won the game, with a balance of " + Math.abs(balance);
  }
  else{
    message = "No one wins! The game ends as a draw!" 
  }
    
alert(message);
  } 
