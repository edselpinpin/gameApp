/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice1, dice2,  gamePlaying;

init();


var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function()
 {
   if (gamePlaying)
   {
      dice1 = Math.floor(Math.random() * 6) + 1;
      dice2 = Math.floor(Math.random() * 6) + 1;

      document.querySelector("#dice-1").style.display = "block";
      document.querySelector("#dice-2").style.display = "block";

      // display result 
      var diceDom1 = document.querySelector('#dice-1');
      var diceDom2 =  document.querySelector('#dice-2');
      var CurrentDom1 = document.querySelector('current-1');
     
     
      diceDom1.src = 'dice-' + dice1 + '.png';
      diceDom2.src = 'dice-' + dice2 + '.png';
      
      if (dice1 + dice2  === 6 && lastDice === 6) {
          // player looses the score if succesive dice roll are 6
        scores[activePlayer] = 0;
        document.querySelector('#current-' + ActivePlayer).textContent = 0;
        nextPlayer();

     }
     else if (dice1 + dice2 !== 1) {
          // add the score
         roundScore = roundScore + dice1 + dice2;
         document.querySelector('#current-' + ActivePlayer).textContent = roundScore;

   }
   else {
      
       nextPlayer();

      }
      lastDice = dice1 + dice2;
 }
 });

document.querySelector('.btn-hold').addEventListener('click', function () {   
   if (gamePlaying) 
   {
  
     // add current score
     scores[ActivePlayer] += roundScore;
     
     // updte the game 
     document.querySelector('#score-' + ActivePlayer).textContent =scores[ActivePlayer];
    
     var input = document.querySelector('.final-score').value;
     var WinningValue;

     if (input) {
         WinningValue = input;
     }
     else 
       WinningValue = 100;
     
     // if active player won the game 
     if (scores[ActivePlayer] >= WinningValue) {
         console.log('winner');
         document.querySelector('#name-' + ActivePlayer).textContent = "Winner";
         document.querySelector('#dice-1').style.display ='none';
         document.querySelector('#dice-2').style.display ='none';
         document.querySelector('.player-' + ActivePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + ActivePlayer + '-panel').classList.remove('active');
         gamePlaying = false;
     } 
     else {
         nextPlayer();
     }
    }  
     
});

document.querySelector('.btn-new').addEventListener('click', init); 
 
function nextPlayer () {
    ActivePlayer === 0 ? ActivePlayer = 1 : ActivePlayer = 0;   
       roundScore = 0;
       document.querySelector('#current-0').textContent = '0';
       document.querySelector('#current-1').textContent = '0';

      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');

      document.querySelector('#dice-1').style.display = 'none';
      document.querySelector('#dice-2').style.display = 'none';
    
}

function init ()
 {
    scores = [0,0]
    roundScore = 0;
    ActivePlayer = 0;
    gamePlaying = true;
    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 2";
    document.querySelector('#dice-1').style.display = "none";
    document.querySelector('#dice-2').style.display = "none";
    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
 
}
    
    