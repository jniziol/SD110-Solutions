// Q0

const languages = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso',
}

const welcome = function(language) {
  if (language in languages) {
    return languages[language];
  } else {
    return languages.english;
  }
}

console.log(welcome("french"));
console.log(welcome("frenche"));

// Q1

const users = [{
  username: 'David',
  status: 'offline',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}];

const whoIsOnline = function(users) {
  const userStatus = {online: [], offline: [], away: []};

  users.forEach(function(user) {
    if (user.status === 'offline') {
      userStatus.offline.push(user.username);
    } else if (user.status === "online" && user.lastActivity > 10) {
      userStatus.away.push(user.username);
    } else {
      userStatus.online.push(user.username);
    }
  })

  return userStatus;
}

console.log(whoIsOnline(users));

// Q2

const firstName = {A: 'Alpha', B: 'Beta', C: 'Cache', L: 'Logic'}
const surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst'}

const aliasGen = function(first, last) {
  if (first[0].toUpperCase() in firstName && last[0].toUpperCase()) {
    return `${firstName[first[0].toUpperCase()]} ${surname[last[0].toUpperCase()]}`
  } else {
    return 'Your name must start with a letter from A - Z.';
  }
}

console.log(aliasGen('Larry', 'Brentwood')) // outputs 'Logic Bomb'
console.log(aliasGen('123abc', 'Petrovic')) // outputs 'Your name must start with a letter from A - Z.'

// Q3

const books = [
  {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    alreadyRead: true,
  },
  {
    title: "Harry Potter",
    author: "J. K. Rowling",
    alreadyRead: true,
  },
  {
    title: "A Promised Land",
    author: "Barack Obama",
    alreadyRead: false,
  }
];

books.forEach(function(book) { // belongs to Arrays / Array-like objects
  if (book.alreadyRead === true) {
    console.log(`You already read "${book.title}" by ${book.author}.`);
  } else {
    console.log(`You still need to read "${book.title}" by ${book.author}.`);
  }
});

// Q4

const order = [[1, 'hamburger'], [4, 'hotdog'], [2, 'coke'], [4, 'milk']];

function calculateCost(items) {
  let total = 0;
  const data = {cost: {hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4}};

  for(let item of items) {
    let qty = item[0]; 
    let product = item[1];

    total += data.cost[product] * qty;
  }

  return total;
}

console.log(calculateCost(order));