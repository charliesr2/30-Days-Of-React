let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const regEx = new RegExp(/,|\./gm);
const cleanText = text.replace(regEx,'');

console.log(cleanText);

let splittedText = cleanText.split(' ');

console.log(splittedText);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']



