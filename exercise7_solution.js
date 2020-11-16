// Q0 

function updateLight(color) {
  switch (color) {
    case 'green':
      return 'yellow';
    case 'yellow':
      return 'red';
    case 'red':
      return 'green';
  }  
}

// Q1

function GCD(num1, num2) {  
  const smallestNumber = num1 > num2 ? num2 : num1;

  for (let x = smallestNumber; x >= 1; x--) {
    if (num1 % x === 0 && num2 % x === 0) {
      return x;
    }
  } 
}

const num1 = 1000;
const num2 = 5;

console.log(GCD(num1, num2));

// Q2

function makeLine(length) {
  let line = "";
  for (let j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(length) {
  for (let x = 1; x <= length; x++) {
    console.log(makeLine(x));
  }
}

buildTriangle(10);

// Q3

const rectangle1Length = parseInt(prompt("Enter the length of rectangle 1:", ""));
const rectangle1Width = parseInt(prompt("Enter the width of rectangle 1:", ""));
const rectangle2Length = parseInt(prompt("Enter the length of rectangle 2:", ""));
const rectangle2Width = parseInt(prompt("Enter the width of rectangle 2:", ""));

function rectangleArea(length, width) {
  return length * width;
}

console.log("Rectangle 1 has an area of " + rectangleArea(rectangle1Length, rectangle1Width));
console.log("Rectangle 2 has an area of " + rectangleArea(rectangle2Length, rectangle2Width));

if (rectangleArea(rectangle1Length, rectangle1Width) > rectangleArea(rectangle2Length, rectangle2Width)) {
  console.log("Rectangle 1 is larger than Rectangle 2");
} else {
  console.log("Rectangle 2 is larger than Rectangle 1");
}


