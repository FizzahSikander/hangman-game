let words = ['banan', 'äppelpaj', 'skruvmejsel', 'potatismos', 'korvkiosk'];
const bodyElem= document.querySelector('body');
const correctGuessesElem = document.querySelector('#correctGuesses');
const incorrectGuessesElem = document.querySelector('#incorrectGuesses');
const correctGuesses = [];
const incorrectGuesses = [];
let attempts = 0;
let randomPosition=Math.floor(Math.random()*words.length);
const selectedWord= words[randomPosition];
console.log(selectedWord);
const letters = selectedWord.split('');
function setup() {
    for(let i = 0; i < letters.length; i++) {
        correctGuesses.push('__  ');
    }

    console.log(correctGuesses);
}

function renderWord() {
    correctGuessesElem.innerHTML = correctGuesses.join('');
}
function renderIncorrectGuesses() {
    incorrectGuessesElem.innerHTML = incorrectGuesses;
}
function renderWrongGuess() {
    if (attempts === 1) {
        document.querySelector('figure').classList.add('scaffold');
    } else if(attempts === 2) {
        document.querySelector('figure').classList.add('head');
    } else if (attempts === 3) {
        document.querySelector('figure').classList.add('body');
    } else if (attempts === 4) {
        document.querySelector('figure').classList.add('arms');
    } else if (attempts === 5) {
        document.querySelector('figure').classList.add('legs');
        console.log('Game over!');
    }
}

setup();
renderWord();

bodyElem.addEventListener('keyup', (event) => {
    console.log('Du klickade på: ', event.key); // Få ut vilken tangent användaren klickade på
    const guessedLetter = event.key;
    let correctGuess = false;

    for(let i = 0; i < letters.length; i++) {
        console.log(letters[i]);
        console.log(guessedLetter);
        console.log('------');
        if (letters[i] === guessedLetter) {
            console.log('Träff! På position', i);
            correctGuesses[i] = guessedLetter;
            console.log(correctGuesses);
            correctGuess = true;
        }
    }

    if (correctGuess) {
        renderWord();
    } else {
        attempts++; // öka attempts med 1
        incorrectGuesses.push(guessedLetter);
        renderWrongGuess();
        renderIncorrectGuesses();
    }
    
});
  /**
bodyElem.addEventListener('keyup', (event) => {
    console.log('Du klickade på: ', event.key); // Få ut vilken tangent användaren klickade på
    const guessedLetter = event.key;
    let correctGuess = false;

    for(let i = 0; i < letters.length; i++) {
        console.log(letters[i]);
        console.log(guessedLetter);
        console.log('------');
        if (letters[i] === guessedLetter) {
            console.log('Träff! På position', i);
            correctGuesses[i] = guessedLetter;
            console.log(correctGuesses);
            correctGuess = true;
        }
    }

    if (correctGuess) {
        renderWord();
    } else {
        attempts++; // öka attempts med 1
        incorrectGuesses.push(guessedLetter);

        renderWrongGuess();
        renderIncorrectGuesses();
    }
    
}); */
