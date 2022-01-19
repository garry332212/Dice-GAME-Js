//buttons 

const newGame = document.querySelector(".btn--new");
const rollDice = document.querySelector(".btn--roll");
const holdScore = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;
//variables to hold the socres and current scores. 
// let currentScore = 0; // to hold the current score
// let activePlayer = 0; // to switch the players
// const scores = [0,0]; // to hold the scores for both players
// let playing = true; // make sure its let not const

document.querySelector(".dice").classList.add('hidden');//hide the dice imaage
//lets roll the dice 



//function to switch the player
 const switchPlayer = function()
{
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    currentScore = 0;// set the score to 0 again 

    activePlayer = activePlayer === 0 ? 1 : 0;

    document.querySelector(".player--0 ").classList.toggle("player--active")
    document.querySelector(".player--1 ").classList.toggle("player--active")
    
}

//Function to roll The Dice 
const diceFunction = function()
{
    if(playing)
    {

    const randomDice = Number(Math.trunc(Math.random()*6)+1);
    console.log(randomDice)
    document.querySelector(".dice").classList.remove('hidden');//show the dice image once dice is rolled
    document.querySelector(".dice").src = `dice-${randomDice}.png`;//change the dice picture according to random number. roll the dice
    
    if(randomDice !=1)
    {
        currentScore += randomDice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }

    else{
        switchPlayer();
    }
 }
}

//Function to hold the score and declare the winner 

const holdFunction = function(){
    if(playing)
    {

    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //declare the winner
    if(scores[activePlayer] >=50)
    {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        document.querySelector(".dice").src = "win.png";
        
    }

    switchPlayer();
    
}
}


//lets add the functions to the buttons and playe the game 
rollDice.addEventListener('click',diceFunction); // roll the dice and call the diceFunction(); 


holdScore.addEventListener('click',holdFunction);// roll the dice and call the holdFunction(); 

//now lets add a reset button to restart the game from 0
const restarGame = function(){
     scores = [0,0]; 
     currentScore = 0; 
     activePlayer = 0; 
     playing = true; 


    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
    document.querySelector(`.player--0`).classList.remove("player--winner");
    document.querySelector(`.player--1`).classList.remove("player--winner");
    document.querySelector(`.player--1`).classList.remove("player--active");
   

    document.getElementById(`score--0`).textContent = 0;
    document.getElementById(`score--1`).textContent = 0;
    document.querySelector(".dice").classList.add('hidden');
}

restarGame();


newGame.addEventListener('click', restarGame)
 
   
  
   



   


