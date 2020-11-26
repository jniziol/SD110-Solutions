// Q0
const multiply = function(arrayOfNums) {
  return arrayOfNums.map(function(element, index) {
    if (index === 0) {
      return element;
    } else {
      return element * arrayOfNums[index - 1];
    }
  });
}

console.log(multiply([1,2,3,4])); // returns [1, 2, 6, 12 ]

// Q1
function isPrimeNumber(numToCheck) {
  for (let x = 2; x < numToCheck; x++) {
    if (numToCheck % x === 0) {
      return false;
    }
  }

  return true;
}

const findFirstPrime = function(someNumbers) {
  return someNumbers.find(function(element) {
    return isPrimeNumber(element);
  });
}

// SAME THING, just better
// 
// const findFirstPrime = function(someNumbers) {
//   return someNumbers.find(isPrimeNumber);
// }

console.log(findFirstPrime([56, 34, 97, 7, 3, 22, 9])); // returns 97

// Q2

function lessThanFourChars(arrayOfStrings) {
  return arrayOfStrings.filter(function(element) {
    return element.length < 4;
  });
}

console.log(lessThanFourChars(["this", "that", "foo", "I", "Software"])); // returns ["foo", "I"]

// Q3
const addThemUp2 = function(arrayOfJunk) {
  let sum = 0;

  arrayOfJunk.forEach(function(element) {
    if (Array.isArray(element)) {
      element.forEach(function(number) {
        sum += number;
      });
    }
  });

  return sum;
}

console.log(addThemUp2([[2, 3, 4], [1, 1, 1], 65, [6, 5, 9, 10, 1], 'A', [2], true])); // returns 45, skips over element 65, 'A' and true

// Q4 (BONUS)
function stringLengthSort(arrayOfStrings) {
  return arrayOfStrings.sort(function(a, b) {
    return a.length - b.length;
  });
}

console.log(stringLengthSort(["John", "Emily", "Christopher", "Jason", "Ed", "Candice", "Tom"])); 

// Q5 (BONUS)

const numberIsEven = function(num) {
  return num % 2 === 0;
}

function reject(arr, cb) {
  const newArr = [];

  arr.forEach(element) {
    if (!cb()) {
      newArr.push(element);
    }
  }

  return newArr;
}

