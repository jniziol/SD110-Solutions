const paragraph1 = "Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense."

const wordCount = function(string) {
  return string.split(" ").length;
}

const includesPunctuation = function(string) {
  return string.includes('.') || string.includes(';') || string.includes(',')
}

const removeLastChar = function(string) {
  return string.substring(0, string.length - 1);
}

const objFromString = function(string) {
  const wordObj = {};

  for(let word of string.split(" ")) {
    let sanitizedWord = word.toLowerCase();

    if (includesPunctuation(sanitizedWord)) {
      sanitizedWord = removeLastChar(sanitizedWord);
    }

    if (wordObj[sanitizedWord] === undefined) {
      wordObj[sanitizedWord] = 1;
    } else {
      wordObj[sanitizedWord]++;
    }
  }

  return wordObj;
}

// Q1 A
const vowelCount = function(string) {
  let vowelCounter = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for(let character of string.toLowerCase()) {
    if (vowels.includes(character)) {
      vowelCounter++;
    }
  }

  return vowelCounter;
}

console.log(vowelCount(paragraph1));

// Q1 B

const sortWords = function(string) {
  let sanitizedString = string.split(" ").map(function(word){ 
    if (includesPunctuation(word)) {
      return removeLastChar(word);
    } else {
      return word;
    }
  });

  return sanitizedString.sort(function(a, b) {
    return b.length - a.length;
  });
}

console.log(sortWords(paragraph1));

// Q1 C
const uniqueWordCount = function(string) {
  return objFromString(string);
}

console.log(uniqueWordCount(paragraph1));


// Q2

const maxDoubleDigit = function(array) {
  const sortedArray = array.sort(function(a, b) {
    return b - a;  
  });

  return sortedArray[0] * 10 + sortedArray[1];
}

console.log(maxDoubleDigit([1, 3, 1])); // returns 31
console.log(maxDoubleDigit([5, 4, 2, 5])); // returns 55
console.log(maxDoubleDigit([5, 7, 5, 9, 7]));  // returns 97

// Q3

const order = "1 hamburger,4 hotdog,2 coke,4 milk";

function totalPrice(string) {
  const data = { cost: { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 }};
  let cost = 0;

  string.split(",").forEach(function(item) {
    let itemWithQty = item.split(" ");

    cost += data.cost[itemWithQty[1]] * itemWithQty[0]
  });

  return cost;
}

console.log(totalPrice(order));