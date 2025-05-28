let randomNumber = parseInt(Math.random()  * 100 + 1);

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#submit')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');
let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if (isNaN(guess)){
        alert('Please enter a number')
    }
    else if (guess < 1 || guess > 100){
        alert('Please enter a number between 1 and 100')
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over! The Random number was ${randomNumber}.`);
            endGame();
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if ( guess === randomNumber){
        displayMessage(`Congratulations! ${guess} is the correct number!`);
        endGame();
    }
    else if (guess < randomNumber){
        displayMessage(`${guess} is too low!`);
        lowOrHi.textContent = 'Last guess was too low!';
    }
    else if (guess > randomNumber){
        displayMessage(`${guess} is too high!`);
        lowOrHi.textContent = 'Last guess was too high!';
    }
}
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess},`;
    numGuess++;
    const guessesLeft = Math.max(0, 11 - numGuess);
    remaining.innerHTML = `${guessesLeft} guesses remaining.`;
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    // Remove existing button if any
    const existingButton = document.querySelector('#newGame');
    if (existingButton) existingButton.remove();
    // Create button instead of <p>
    const newGameButton = document.createElement('button');
    newGameButton.id = 'newGame';
    newGameButton.textContent = 'Start a new Game';
    newGameButton.classList.add('button'); // optional, if you have styles for .button
    startOver.appendChild(newGameButton);
    playGame = false;
    newGame(); // set event listener
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    if (newGameButton) {
        newGameButton.addEventListener('click', function(e){
            randomNumber = parseInt(Math.random() * 100 + 1);
            prevGuess = [];
            numGuess = 1;
            guessSlot.innerHTML = '';
            remaining.innerHTML = `${11 - numGuess} guesses remaining.`;
            userInput.removeAttribute('disabled');
            lowOrHi.textContent = ''; // clear message
            startOver.removeChild(newGameButton);
            playGame = true;
        });
    }
}



// function endGame(){
//     userInput.value = '';
//     userInput.setAttribute('disabled', '');
//     p.classList.add('button')
//     p.innerHt = `<h2>Start a new Game</h2>`;
//     startOver.appendChild(p);
//     playGame = false
//     newGame();
// }
// function newGame(){
//     const newGameButton = document.querySelector('#newGame');
//     newGameButton.addEventListener('click', function(e){
//         randomNumber = parseInt(Math.random() * 100 + 1);
//         prevGuess = []
//         numGuess = 1 
//         guessSlot.innerHTML = '';
//         remaining.innerHTML = `${11 - numGuess} guesses remaining.`;
//         userInput.removeAttribute('disabled');
//         startOver.removeChild(p);
//         playGame = true;
//     })
// }
