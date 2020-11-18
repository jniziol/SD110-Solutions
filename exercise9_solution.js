// Q0

function getRandomInt(min, max) {
  // Don't worry about how this works, just trust that it
  // generates an integer between min and max.
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const someRandomNumber = getRandomInt(1, 10);

console.log("I'm thinking of a number between 1 and 10!");
let guess;
let guesses = 0;

do {
  guess = parseInt(prompt("Guess a number:", ""));
  console.log(`You guessed ${guess}.`);
  guesses++;
  if (guess !== someRandomNumber) {
    console.log("Sorry, that's wrong. Try again.");
  }
} while(guess !== someRandomNumber) 

console.log("You got it!");
console.log(`The secret number was ${someRandomNumber}.`);

if (guesses > 1) {
  console.log(`It only took you ${guesses} guesses.`);
} else {
  console.log(`It only took you 1 guess.`);
}

// Q1

function stringIsPalindrome(someString) {
  let reversedString = "";

  for (let x = someString.length - 1; x >= 0; x--) {
    reversedString += someString[x];
  }

  if (someString.toLowerCase() === reversedString.toLowerCase()) {
    return true;
  } else {
    return false;
  }  
}

console.log(stringIsPalindrome("John"));
console.log(stringIsPalindrome("dad"));
console.log(stringIsPalindrome("Dad"));

// Q2

function doubleConsonants(myString) {
  let newString = "";

  for (let x = 0; x < myString.length; x++) {
    newString += myString[x];
    
    if (myString[x] === "a" || myString[x] === "e" || myString[x] === "i" ||  myString[x] === "o" || myString[x] === "u" ) { 
      continue;
    } 

    newString += myString[x];
  }

  return newString;
}

console.log(doubleConsonants("Johnathan")); // returns "JJohhnnatthhann"
console.log(doubleConsonants("racecar")); // returns "rracceccarr"

// Q3

function vowelMultiplier(word) {
  let vowelCounter = 1;
  let newWord = "";

  for (let x = 0; x < word.length; x++) {
    if (word[x] === 'a' || word[x] === 'e' || word[x] === 'i' || word[x] === 'o' || word[x] === 'u' ) {
      for (let y = 0; y < vowelCounter; y++) {
        newWord += word[x];
      }
      vowelCounter++;
    } else {
      newWord += word[x];
    }
  }

  return newWord;
}

console.log(vowelMultiplier("Johnathan Niziol"));

// Q4

function pigLatin(word) {
  let newWord = "";
  let currentFirstLetter = "";

  for (let x = 0; x < word.length; x++) {
    if (word[x] === " ") {
      newWord += currentFirstLetter + "ay ";
      currentFirstLetter = "";
    } else if (word[x + 1] === undefined) {
      newWord += word[x] + currentFirstLetter + "ay ";
    } else if (currentFirstLetter === "") {
      currentFirstLetter = word[x];
    } else {
      newWord += word[x];
    }
  }

  return newWord;
}

console.log(pigLatin("The quick brown fox"));