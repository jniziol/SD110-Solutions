// Q0
function lessThanFourChars(arrayOfStrings) {
  const newArray = [];

  arrayOfStrings.forEach(function(string) {  
    if (string.length < 4) {
      newArray.push(string);
    }
  });

  return newArray;
}

console.log(lessThanFourChars(["this", "that", "foo", "I", "Software"])); // returns ["foo", "I"]

// Alternative approach using the Filter method
//
// function lessThanFourChars(arrayOfStrings) {
//   return arrayOfStrings.filter(function(string) {  
//     return string.length < 4;
//   });
// }

// Q1

function findLargest(arrayOfInts) {
  let largestNumber = arrayOfInts[0]; // 19

  arrayOfInts.forEach(function(currentNumber) {  
    if (largestNumber < currentNumber) {
      largestNumber = currentNumber;
    }
  });
 
  return largestNumber;
}

console.log(findLargest([19, 28, 69, 20, 41, 1, 39, 71, 4])); // returns 71

// Q2

const returnMiddle = function(arrayOfNums) {
  if (arrayOfNums.length % 2 === 0) {
    return [arrayOfNums[arrayOfNums.length / 2], arrayOfNums[arrayOfNums.length / 2 - 1]];
  } else {
    return arrayOfNums[(arrayOfNums.length - 1) / 2];
  }
}

console.log(returnMiddle([1,2,3,4,5,6,7])); // returns 4
console.log(returnMiddle([1,2,3,4,5,6,7,8])); // returns [4, 5]

// Q3

const flipCharacters = function(aString) {
  const splitString = aString.split("");

  const temp = splitString[0];
  splitString[0] = splitString[splitString.length - 1];
  splitString[splitString.length - 1] = temp;

  return splitString.join("");  
}

console.log(flipCharacters("myString")); // returns "gyStrinm"
console.log(flipCharacters("John")); // returns "nohJ"
console.log(flipCharacters("hi")); // returns "ih"

// Q4

const addThemUp = function(twoDimensionalArray) {
  let sum = 0;

  for (let x = 0; x < twoDimensionalArray.length; x++) {
    for (let y = 0; y < twoDimensionalArray[x].length; y++) {
      sum += twoDimensionalArray[x][y];
    }
  }
  
  // A different approach, using forEach loops
  //
  // twoDimensionalArray.forEach(function(innerArray) {
  //   innerArray.forEach(function(integer) {
  //     sum += integer;
  //   });
  // });

  return sum;
}

console.log(addThemUp([[2, 3, 4], [1, 1, 1], [6, 5, 9, 10, 1], [2]]));

// Q5 Bonus

function getRandomInt(min, max) {
  // Don't worry about how this works, just trust that it
  // generates an integer between min and max.
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const people = ["Jane", "John", "Jack", "Jin", "Juan", "Jackie", "Jerome", "Jan", "Jatao", "John"];
const team1 = [];
const team2 = [];
const teams = [team1, team2];
let count = 0;

while(people.length > 0) {
  const randomIndex = getRandomInt(0, people.length - 1);
  teams[count % 2].push(people.splice(randomIndex, 1)[0]);
  count++;
}

console.log(team1, team2);