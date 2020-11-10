// Q1
let browser = 'Safari';

if (browser === "Edge") {
  alert( "You've got the Edge!" );
} else if (browser === "Chrome" || browser ===  "Firefox" || browser ===  "Safari" || browser === "Opera" ) {
  alert( 'Okay we support these browsers too' );
} else {
  alert('We hope that this page looks ok!' );
}

// Q2

const balance = -599;
const checkBalance = true;
const isActive = false;

if (checkBalance) {
  if (isActive) {
    if (balance > 0) {
      console.log("Your balance is $" + balance.toFixed(2) + ".");
    } else if (balance < 0) {
      console.log("Your balance is negative, please contact the bank.");
    } else {
      console.log("Your account is empty");
    }
  } else {
    console.log("Your account is no longer active");
  } 
} else {
  console.log("Thank you, have a nice day!");
}

// Q3

const birthDate = 21;
const birthMonth = "January";

if ((birthMonth === "January" && birthDate >= 21) || (birthMonth === "February" && birthDate <= 19)) {
  console.log("You are a Aquarius");
  console.log("Listen to what your heart is telling you");
} else if (...) {
  // ... repeat for each zodiac sign
}

// Q4

const educationLevel = "high school diploma";
let salary;

switch(educationLevel) {
  case "no high school diploma":
    salary = 25636;
    break;
  case "high school diploma":
    salary = 35256;
    break;
  case "Associate's degree":
    salary = 41496;
    break;
  case "Bachelor's degree":
    salary = 59124;
    break;
  case "Master's degree":
    salary = 69732;
    break;
  case "Professional degree":
    salary = 89960;
    break;
  case "Doctoral degree":
    salary = 84396;
    break;
}

console.log("In 2015, a person with " + educationLevel + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
console.log("hi!");
// Q5

const GST = 0.07;
const PST = 0.05;
const shirtColors = 2;
const shirtQuantity = 150;
let price;

if (shirtQuantity < 100) {
  switch(shirtColors) {
    case 1:
      price = 8;
      break;
    case 2:
      price = 9;
      break;
    case 3:
      price = 10;
      break;
  }
} else if (shirtQuantity < 250) {
  switch(shirtColors) {
    case 1:
      price = 6;
      break;
    case 2:
      price = 7;
      break;
    case 3:
      price = 8;
      break;
  }
} else {
  switch(shirtColors) {
    case 1:
      price = 5;
      break;
    case 2:
      price = 6;
      break;
    case 3:
      price = 7;
      break;
  }
}

const total = price * shirtQuantity * (1 + (PST + GST));
console.log(shirtQuantity + " shirts screen printed with " + shirtColors + " colors: $" + total.toFixed(2));