
let secretNumber;
let times = 0;


const numberInput = document.querySelector('.js-input');
const guessButton = document.querySelector('.js-guess-button');
const newGameButton = document.querySelector('.js-newGame-button');

generateNumber();
clear();

newGameButton.setAttribute('disabled','true');
newGameButton.setAttribute('class','disabledButton');


function generateNumber(){
  secretNumber = Math.round(Math.random()*10);
  console.log(`The number secret is :  ${secretNumber}`);
  
}


function validateResult(userGuess,secretNumber){

    if (userGuess === secretNumber){
      alert('you win');
      times ++;
     
    }else{
      alert('you lost');
      times ++;
    }

    clear();

    if (times === 3){
      alert('Game over');
      guessButton.setAttribute('disabled','true');
      guessButton.setAttribute('class','disabledButton');
      numberInput.setAttribute('disabled','true');
      newGameButton.removeAttribute('disabled');
      newGameButton.removeAttribute('class','disabledButton');
    }

   

}


newGameButton.addEventListener("click", () => {
  generateNumber();
  guessButton.removeAttribute('disabled');
  numberInput.removeAttribute('disabled');
  times = 0;
  clear();
  reset();
  
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
}




