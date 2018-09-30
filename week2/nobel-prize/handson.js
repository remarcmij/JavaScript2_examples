// using JSON data obtained from:
// http://api.nobelprize.org/v1/prize.json

// start of code that you will learn later in the Node module
const { readFileSync } = require('fs');
const jsonString = readFileSync('./data.json', 'utf8');
// end of code that you will learn later in the Node module

const jsonObj = JSON.parse(jsonString);

const prizes = jsonObj.prizes;

const categories = prizes.map(prize => prize.category);

const categorySet = new Set(categories);
console.log(categorySet);

function getPrizesWithTwoPlusLaureatesForCategory(prizes, category) {
  return prizes
    .filter(prize => prize.category === category)
    .filter(prize => prize.laureates.length > 1);
}

const uniqueCategories = Array.from(categorySet);
console.log(uniqueCategories);

// ['Rainer Weiss', '...']
function getLaureatesFullName(prize) {
  return prize.laureates.map(laureate => laureate.firstname + ' ' + laureate.surname);
}

uniqueCategories.forEach(category => {
  console.log(category.toUpperCase());
  const prizesWithTwoPlusLaureates = getPrizesWithTwoPlusLaureatesForCategory(prizes, category);

  prizesWithTwoPlusLaureates
    .map(prize => {
      const laureatesNames = getLaureatesFullName(prize);
      return {
        year: prize.year,
        laureates: laureatesNames
      };
    })
    .map(item => item.year + ': ' + item.laureates.join(', '))
    .forEach(str => console.log(str));
});
