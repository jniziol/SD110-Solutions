// Q0

const captain = "Picard";
const commander = "Will";
const ensign = "Wesley";
const android = "Data";
const security = "Worf";
const engineering = "Geordi";

const crew = [captain, commander, ensign, android, security, engineering];

console.log(crew);

// Q1

const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

prices[0] = 0.00;
prices[2] = 0.00;
prices[6] = 0.00;

console.log(prices);

// Q2

function arrayClone(arrayToClone) {
  const clone = [];

  for (let x = 0; x < arrayToClone.length; x++) {
    clone[x] = arrayToClone[x];
  }

  return clone;
}

console.log(arrayClone([1, 5, 4, 19])); // returns a new array [1,5,4,19]
console.log(arrayClone(['a', ['b', 'c'], 'd'])); // returns a new array ['a', ['b', 'c'], 'd']

// Q3

function first(theArray, numberOfElements) {
  if (numberOfElements === undefined) {
    return theArray[0];
  } else {
    const clone = [];

    for (let x = 0; x < numberOfElements; x++) {
      clone[x] = theArray[x];
    }

    return clone;
  }
}

console.log(first([7, 9, 0, -2])); // returns 7
console.log(first([7, 9, 0, -2], 3)); // returns [7, 9, 0]

// Q4 (To)

function sumElementsByIndex(array1, array2) {
  const longestLength = array1.length > array2.length ? array1.length : array2.length;
  const newArray = [];

  for (let x = 0; x < longestLength; x++) {
    let val1 = array1[x];
    let val2 = array2[x];

    if (array1[x] === undefined) {
      val1 = 0
    }

    if (array2[x] === undefined) {
      val2 = 0;
    }

    newArray[x] = val1 + val2;
  }

  return newArray;
}

console.log(sumElementsByIndex([1, 2, 3, 4], [2, 3, 4, 5])) // returns [3, 5, 7, 9] because [1 + 2, 2 + 3, 3 + 4, 4 + 5]
console.log(sumElementsByIndex([1, 2, 3, 4], [5])) // returns [6, 2, 3, 4] because [1 + 5, 2 + undefined, 3 + undefined, 4 + undefined]
console.log(sumElementsByIndex([1], [5, 2, 3, 4])) // returns [6, 2, 3, 4] because [1 + 5, undefined + 2, undefined + 3, undefined + 4]
console.log(sumElementsByIndex([1, undefined, 3], [5, undefined, 3, 4])) // returns [6, 0, 6, 4] because [1 + 5, undefined + undefined, 3 + 3, undefined + 4]
