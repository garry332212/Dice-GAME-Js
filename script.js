'use strict';

//selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");// to select the id we use #
const score1El = document.getElementById('score--1');// getting id by getElementById
const diceEl = document.querySelector('.dice');//  dice class to hide the dice
let score0 =document.querySelector("#current--0"); //player 1 score
let score1 =document.querySelector("#current--1"); //player 2 score

//buttons
const rollDice = document.querySelector(".btn--roll");// button to role the dice.
const newGame = document.querySelector(".btn--new");// button to role the dice.
const btnHold = document.querySelector(".btn--hold");// button to role the dice.

const scores =[0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
 


const switchPlayer = function(){
    
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        //switch to next player
        activePlayer = activePlayer == 0 ? 1 : 0;
        
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    
}

//score0El  & score1El are the big Scores for both the players 

score0El.textContent = 0; 
score1El.textContent = 0;
diceEl.classList.add('hidden');

//function to to show dice when it matches its number

rollDice.addEventListener('click', function(){
    if(playing){
        
    
    const diceRoll = Number(Math.trunc((Math.random()* 6)+1));

    
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`// this will change the image accoridng to the dice (if 6 is randmoly generated pic will be dice-6)
    

    if(diceRoll !==1){

        currentScore += diceRoll;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    }

    else{
        switchPlayer();
    }

   }
    
});

//termpoary new game button 
newGame.addEventListener('click',function(){
    window.location.reload();
});

//holding the score
btnHold.addEventListener('click', function (){
    if(playing){
    //1. add current score to the score of the active player
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player's score is >= 100 and finish the game.
    if(scores[activePlayer] >= 50){
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        diceEl.classList.add("hidden")
        
       

    };


    // . 3 switch to the next player.
    switchPlayer();
}
});




