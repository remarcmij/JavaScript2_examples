// using JSON data obtained from:
// http://api.nobelprize.org/v1/prize.json

// start of code that you will learn later in the Node module
const { readFileSync } = require('fs');

const jsonString = readFileSync('./data.json', 'utf8');
// end of code that you will learn later in the Node module

console.log(typeof jsonString);
const json = JSON.parse(jsonString);
console.log(typeof json);

const prizes = json.prizes;

console.log(Array.isArray(prizes));

console.log('Number of prizes: ' + prizes.length);

const categories = prizes.map(prize => prize.category);

console.log('categories :', categories);

const uniqueCategories = Array.from(new Set(categories));

console.log('uniqueCategories :', uniqueCategories);

const medicinePrizes = prizes.filter(prize => prize.category === 'medicine');

console.log(medicinePrizes);
console.log(medicinePrizes.length);

const medicinePrizesWithTwoPlusLaureates = medicinePrizes.filter(
  prize => prize.laureates.length >= 2
);
console.log(medicinePrizesWithTwoPlusLaureates.length);

const prizeYears = medicinePrizesWithTwoPlusLaureates.map(prize => prize.year).sort();

console.log('prizeYears :', prizeYears.join(', '));

const prizeDetails = medicinePrizesWithTwoPlusLaureates.map(prize => {
  const laureateNames = prize.laureates.map(
    laureate => laureate.firstname + ' ' + laureate.surname
  );
  return {
    year: prize.year,
    laureates: laureateNames
  };
});

console.log(prizeDetails);

prizeDetails
  .sort((a, b) => a.year - b.year)
  .forEach(detail => {
    console.log(detail.year + ':');
    detail.laureates.forEach(laureate => {
      console.log('-  ' + laureate);
    });
  });
