// Q1
const var1 = -2;
const var2 = -10;

const someString = var1 + var2 > 0 ? 'oh' : 'no';

console.log(someString);

// Q2

const selectedLanguage = prompt('Choose a language:');

if (selectedLanguage === 'spanish') {
  console.log('Hola Mundo');
} else if (selectedLanguage === 'french') {
  console.log('Bonjour Monde');
} else {
  console.log('Hello World');
} 

// Q3

const myGrade = 63;

if (myGrade < 50) {
  console.log('F');
} else if (myGrade < 60) {
  console.log('D');
} else if (myGrade < 70) {
  console.log('C');
} else if (myGrade < 80) {
  console.log('B');
} else if (myGrade < 90) {
  console.log('A');
} else if (myGrade < 100) {
  console.log('A+');
}

// Q4

const someNumber = 12;

if (someNumber % 2 === 1) {
  console.log("odd");
} else {
  console.log("even");
}

// Q5

const sizeOfMusicalGroup = 3;

if (sizeOfMusicalGroup <= 0) {
  console.log("not a group");
} else if (sizeOfMusicalGroup === 1) {
  console.log("solo");
} else if (sizeOfMusicalGroup === 2) {
  console.log("duo");
} else if (sizeOfMusicalGroup === 3) {
  console.log("trio");
} else if (sizeOfMusicalGroup === 4) {
  console.log("quartet");
} else if (sizeOfMusicalGroup > 4) {
  console.log("this is a large group");
}