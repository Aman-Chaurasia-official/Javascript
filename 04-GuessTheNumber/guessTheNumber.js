let randomNumber = parseInt(Math.random() * 100 +1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p= document.createElement('p')
 

let prevGuss = []
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please Enter a Valid Number')
  }
  else if(guess < 1){
    alert('Please Enter a Number greater than 1')
  }
  else if(guess > 100){
    alert('Please Enter a Number less than 100')
  }
  else{
    prevGuss.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random Number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guess it right`)
  }
  else if(guess > randomNumber){
    displayMessage(`Number is Too High`)
  }
  else if(guess < randomNumber){
    displayMessage(`Number is Too Low`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessslot.innerHTML += `${guess} `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`; 
}

function endGame(){
   userInput.value = ''
   userInput.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
   startOver.appendChild(p)
   playGame = false
   newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 +1);
    prevGuss = []
    numGuess = 1
    guessslot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}

