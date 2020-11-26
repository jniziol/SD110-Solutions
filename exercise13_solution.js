// Q0

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// A

const bornInThe1500s = inventors.filter(function(inventor) {
  return inventor.year >= 1500 && inventor.year < 1600;
}); 

console.log(bornInThe1500s);

// B

const firstAndLast = inventors.map(function(inventor) {
  return `${inventor.first} ${inventor.last}`;
});

console.log(firstAndLast);

// C

inventors.sort(function(inventor1, inventor2) {
  return inventor1.year - inventor2.year;
});

console.log(inventors);

// D

inventors.sort(function(inventor1, inventor2) {
  const ageA = inventor1.passed - inventor1.year;
  const ageB = inventor2.passed - inventor2.year;
  return ageB - ageA;
});

console.log(inventors);

// E (BONUS)

const total = inventors.reduce(function(totalAge, inventor) {
  return totalAge += inventor.passed - inventor.year;
}, 0);

console.log(total);


// #2
const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// #2A

console.log(people.sort());

// # 2B (BONUS)

const firstHalf = people.slice(0, Math.floor(people.length / 2));
const secondHalf = people.slice(Math.floor(people.length / 2), people.length - 1);

console.log(firstHalf, secondHalf);

// # 2C (BONUS)

const noDupes = people.filter(function(person) {
  for (let x = 0; x < person.length; x++) {
    if (person[x] === person[x + 1]) {
      return false;
    } 
  }

  return true;
});

console.log(noDupes);