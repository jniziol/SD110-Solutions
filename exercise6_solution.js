// Q0

function joke() {
  return "heeheehee!";
}

console.log(joke()); 

// Q1

function joke(num) {
  let laughCount = "";
  
  for(let i = 0; i < num; i++) {
    laughCount += "hee";
  }

  return laughCount + "!";
}

console.log(joke(4)); 

// Q2

function square(someNumber) {
  const theAnswer = someNumber * someNumber;
  return theAnswer;
}

console.log(square(5));

// Q3

function divisors(aNumber) {
  for (let x = 1; x <= aNumber; x++) {
    if (aNumber % x === 0) {
      console.log(x);
    }
  }
}

divisors(50);

// Q4

function repeatStr(theString, num) {
  let stringCount = "";
  
  for(let i = 0; i < num; i++) {
    stringCount += theString;
  }

  return stringCount;
}

console.log(repeatStr("john", 4)); 

// Q5

function perfectSquare(someNum) {
  for (let x = 1; x <= someNum; x++) {
    if (x * x === someNum) {
      return true;
    }
  }

  return false;
}

// Q6

function sumDigits(someNumber) {
  let total = 0;

  while (someNumber > 0) {
    let lastDigit = someNumber % 10;
    total += lastDigit;
    someNumber = (someNumber - lastDigit) / 10
  }
  
  return total;
}