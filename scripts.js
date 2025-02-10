
let secretNumber;
let times = 0;


const numberInput = document.querySelector('.js-input');
const guessButton = document.querySelector('.js-guess-button');
const newGameButton = document.querySelector('.js-newGame-button');
const resultGame = document.querySelector('.js-result-game');
const imageGame = document.querySelector('.js-image-game');
const textGame = document.querySelector('.js-text-game');

generateNumber();
clear();
newGameF();



function generateNumber(){
  secretNumber = Math.round(Math.random()*10);
  console.log(`The number secret is :  ${secretNumber}`);
  
}


function validateResult(userGuess,secretNumber){

    if (userGuess === secretNumber){
      imageGame.innerHTML = `<img src = "assets/victory.png" class="wizard-img">`;
      resultGame.innerText = 'You Win';
      times ++;
      textGame.innerText = `Intento numero ${times}`;
      gameOver();
     
    }else{

      if (userGuess < secretNumber) {
        resultGame.innerText = 'The secret number is higher.';
      }else{
        resultGame.innerText = 'The secret number is lower.';
      }
      
      times ++;
      textGame.innerText = `Intento numero ${times}`;

      if (times === 3){
        imageGame.innerHTML = `<img src = "assets/lost.png" class="wizard-img">`;
        resultGame.innerText = 'You lost';
        gameOver();
      }
    }

    clear();

    

   

}


newGameButton.addEventListener("click", () => {
  generateNumber();
  guessButton.removeAttribute('disabled');
  numberInput.removeAttribute('disabled');
  times = 0;
  clear();
  reset();
  newGameF();
  
})


guessButton.addEventListener("click", () => {
  const userGuess = parseInt(numberInput.value);
  userGuess ? validateResult(userGuess,secretNumber): alert('Please enter a number');
});


function clear(){

  document.querySelector('.js-input').focus();
  document.querySelector('.js-input').value = '';
  

}


function reset(){

  guessButton.removeAttribute('class','disabledButton');
  imageGame.innerHTML = `<img src = "assets/dark-wizard.webp" class="wizard-img">`;
  resultGame.innerText = '';
  textGame.innerText = 'Tell me a number from 1 to 10. You have 3 opportunities.';

}


function gameOver(){

  guessButton.setAttribute('disabled','true');
  guessButton.setAttribute('class','disabledButton');
  numberInput.setAttribute('disabled','true');
  newGameButton.removeAttribute('disabled');
  newGameButton.removeAttribute('class','disabledButton');


}



function newGameF(){

  newGameButton.setAttribute('disabled','true');
  newGameButton.setAttribute('class','disabledButton');


}


      



