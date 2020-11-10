// Q1

for (let x = 1; x <= 20; x++) {
  for (let y = 1; y <= 100; y++) {
    console.log(x + "-" + y); // string concatenation version
  }
}

// Q2

let myNumber = parseInt(prompt("hey, enter a number!", "")); // This will give you a REAL number

while (myNumber > 0) {
  myNumber = parseInt(prompt("hey, enter a number!", ""));
}

// Q3

let myNumber = parseInt(prompt("Please enter a number, greater than 1:", "")); // This will give you a REAL number
let loopCount = 1;

while (myNumber < 0) {
  myNumber = parseInt(prompt("You entered " + myNumber + ". That number is invalid, please enter a number, greater than 1:", ""));
}

alert("You entered " + myNumber);

while (myNumber > 1) {
  console.log(loopCount++ + ". " + myNumber + " / 2 = " + myNumber / 2);
  myNumber /= 2;
}

// Q4

let myNumber;

do {
  myNumber = parseInt(prompt("hey, enter a number!", "")); // This will give you a REAL number
} while(myNumber > 0);

// Q5

// Take integer inputs from user until he/she presses q ( Ask to press q to quit after every integer input ). Print average and product of all numbers.

let myNumber = prompt("hey, enter a number! Press q to quit", ""); // This will give you a REAL number
let total = 0;
let loops = 0;

while(myNumber != 'q') {
  loops++;
  total += parseInt(myNumber);
  myNumber = prompt("hey, enter a number! Press q to quit", ""); // This will give you a REAL number
}

console.log(total / loops);


// Q6

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... n

let first = 0;
let second = 1;
let loops = 10;

for(x = 0; x < loops; x++) {
  console.log(first)
  next = first + second;
  first = second;
  second = next;
}
