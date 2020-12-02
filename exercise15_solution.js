
// Q0A
document.getElementById('main');
document.getElementsByClassName('main_homepage');
const main = document.querySelector('.main_homepage');

// Q0B
main.querySelector('#featuredSlider');
main.querySelector('main');
main.querySelector('#featuredSlider.featuredSlider');
main.querySelector('div.col-2.featuredItems');

// Q1

document.querySelectorAll('.banner').length;

// Q2

document.querySelector('.globalNav-list').length
document.getElementsByClassName('globalNav-list').length

// Q3

const ul = document.querySelector('.globalNav-list.group');

for (let li of ul.children) {
  console.log(li.querySelector('a').textContent);
}

// Q4

const links = document.querySelectorAll('a');

console.log(links[3].textContent);

// Q5

const h3Tags = document.querySelectorAll('h3');

for (const tag of h3Tags) {
  tag.textContent === "International Students";
}

// Q6 

const innertext = document.body.innerText;
console.log(innertext.toLowerCase().split("student").length - 1);