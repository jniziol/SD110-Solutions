// Q0

function getRandomInt(min, max) {
  // Don't worry about how this works, just trust that it
  // generates an integer between min and max.
  return Math.floor(Math.random() * (max+1 - min)) + min;
}

const randomNumber = getRandomInt(1, 100);
let userGuess = prompt("Enter a number between 1 and 100:");
const ALLOWED_GUESSES = 7;
let guesses = 1;

// Loop while the number they guesses 
// does not match the random number generated
while(userGuess != randomNumber && guesses <= ALLOWED_GUESSES) {
  alert(`You guessed ${userGuess}`);

  if (userGuess > randomNumber) {
    userGuess = prompt(`${userGuess} is too high. Guess again, you have ${allowedGuesses} guesses remaining.`);
  } else {
    userGuess = prompt(`${userGuess} is too low. Guess again. Guess again, you have ${allowedGuesses} guesses remaining`);
  }

  guesses++;
}

if (userGuess == randomNumber) {
  alert(`You guessed ${userGuess}`);
  alert(`You got it!`);
  alert(`The secret number was ${randomNumber}.`);
  alert(`It only took you ${guesses} guesses.`);
} else {
  alert(`You guessed ${userGuess}`);
  alert(`The secret number was ${randomNumber}.`);
  alert(`You didn't guess the number.`);
}

// Q1

function getRandomInt(min, max) {
  // Don't worry about how this works, just trust that it
  // generates an integer between min and max.
  return Math.floor(Math.random() * (max+1 - min)) + min;
}

let diceSides = parseInt(prompt("How many sides on your dice?"));
let turns = 0;
let dice1Total = 0;
let dice2Total = 0;
let doubles = 0;

while(diceSides <= 2) {
  alert(`Sorry, that's not a valid size value. Please choose another number.`);
  diceSides = parseInt(prompt("How many sides on your dice?"));
}

alert(`Thanks! Here we go ...`);

while (dice1 !== 1 || dice2 !== 1) {
  // rolling 2 dice
  const dice1 = getRandomInt(1, diceSides);
  const dice2 = getRandomInt(1, diceSides);

  dice1Total += dice1;
  dice2Total += dice2;

  console.log(`${++turns}. die number 1 is ${dice1} and die number 2 is ${dice2}.`)

  if (dice1 === dice2) {
    doubles++;
  }
}

console.log(`You got snake eyes! Finally! On try number ${turns}!`);
console.log(`Along the way you rolled doubles ${doubles} times`);
console.log(`The average roll for die #1 was ${(dice1Total/turns).toFixed(2)}`);
console.log(`The average roll for die #2 was ${(dice2Total/turns).toFixed(2)}`);

// Q3

for (let x = 1; x <= 9; x++) {
  let multiplication = "";

  for(let y = 1; y <= 9; y++) {
    if (x * y < 10) {
      multiplication += ` ${x * y} `;
    }
    else {
      multiplication += `${x * y} `;
    }
  }

  console.log(multiplication);
}