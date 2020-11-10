// Q1
let x = 9;

while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}

for (let x = 9; x >= 1; x--) {
  console.log("hello " + x);
}

// Q2
let factorial = 1;

for (let x = 12; x >= 1; x--) {
  factorial = x * factorial;
}

console.log(factorial);

// Q3

for (let x = 1; x <= 100; x++) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("Fizz");
  } else if (x % 5 === 0) {
    console.log("Buzz");
  } else if (x % 3 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(x);
  }
}

// Q4

for (let bottles = 99; bottles >= 1; bottles--) {
  if (bottles % 3 !== 0) {
    if (bottles === 2) {
      console.log(bottles + " bottles of beer on the wall! " + bottles + " bottles of beer! Take one down, pass it around..." + (bottles - 1) + " bottle of beer on the wall!");
    } else if (bottles === 1) {
      console.log(bottles + " bottle of beer on the wall! " + bottles + " bottle of beer! Take one down, pass it around..." + (bottles - 1) + " bottles of beer on the wall!");  
    } else {
      console.log(bottles + " bottles of beer on the wall! " + bottles + " bottles of beer! Take one down, pass it around..." + (bottles - 1) + " bottles of beer on the wall!");
    }
  }
}

// Q5

const increment = 3;
const loops = parseInt(prompt("How many numbers should I calculate?", "3"));
let total = 0;
let subtotal = total;

for (x = 1; x <= loops; x++) {
  subtotal = (subtotal * 10) + increment;
  total += subtotal;  
}

// Q6

let number = parseInt(prompt("How many numbers should I calculate?", "3"));
let loops = 1;
let newNumber = 0;

console.log("You entered " + number);

while (number > 0) {
  let lastDigit = number % 10; 
  newNumber = newNumber * 10 + lastDigit;
  number = (number - lastDigit) / 10; 
}

console.log("The reverse is " + newNumber);