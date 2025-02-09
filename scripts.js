
let secretNumber;

const numberInput = document.querySelector('.js-input');
const guessButton = document.querySelector('.js-guess-button');
const newGameButton = document.querySelector('.js-newGame-button');

generateNumber();


function generateNumber(){
  secretNumber = Math.round(Math.random()*10);
 
  
}


function validateResult(userGuess,secretNumber){

    userGuess === secretNumber ? alert('you win') : alert('you lost');

}


newGameButton.addEventListener("click", () => {
  generateNumber();
  
})

guessButton.addEventListener("click", () => {
  const userGuess = parseInt(numberInput.value);
  userGuess ? validateResult(userGuess,secretNumber): alert('Please enter a number');
 
})


