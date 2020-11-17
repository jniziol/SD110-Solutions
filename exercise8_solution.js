// Q0

function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

// Q1

function expressionsMatter(num1, num2, num3) {
  return Math.max(
    num1 + num2 + num3,
    num1 * num2 * num3,
    (num1 + num2) * num3,
    num1 * (num2 + num3),
    num1 * num2 + num3,
    num1 + num2 * num3,
  );
}

console.log(expressionsMatter(1,1,1))  // returns 3 => 1 + 1 + 1 = 3
console.log(expressionsMatter(9,1,1)) // return 18 => 9 * (1+1) = 18

// Q2

function isPrimeNumber(numToCheck) {

  for (let x = 2; x < numToCheck; x++) {
    if (numToCheck % x === 0) {
      alert(`${x} is a divisor of ${numToCheck}  ... stopping`)
      return false;
    }

    alert(`${x} is NOT a divisor of ${numToCheck}  ... continuing`)
  }

  return true;
}

const number = prompt("Please enter a number to check");

if (isPrimeNumber(number)) {
  alert(`${number} is a prime number!`)
} else {
  alert(`${number} is NOT a prime number!`)
}

// Q3

const triangleSize = prompt("Enter a triangle size");

for (let x = triangleSize; x >= 1; x--) {
  let line = "";

  for (let y = x; y >= 1; y--) {
    line += "* ";
  }

  console.log(line);
}

// Q4

function titleize(theString) {
  let newString = "";

  for(let x = 0; x < theString.length; x++) {
    
    if(theString[x - 1] === " " || x === 0) {
      newString += theString[x].toUpperCase();
    } else {
      newString += theString[x].toLowerCase();
    }
  }

  return newString;
}

console.log(titleize("star wars: a new hope"));
console.log(titleize("a mIDSUMMER nIGhT's DREam"));
console.log(titleize("parasite"));