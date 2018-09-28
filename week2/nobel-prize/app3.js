const { readFileSync } = require('fs');

function getCategoryDetails(prizes, category) {
  return prizes
    .filter(prize => prize.category === category)
    .filter(prize => prize.laureates.length >= 2)
    .map(prize => {
      const laureateNames = prize.laureates.map(laureate => laureate.firstname + ' ' + laureate.surname);
      return {
        year: prize.year,
        laureates: laureateNames
      };
    });
}

function reportCategory(prizes, category) {
  console.log(category.toUpperCase());

  getCategoryDetails(prizes, category)
    .sort((a, b) => a.year - b.year)
    .forEach(detail => {
      console.log(detail.year + ':');
      detail.laureates.forEach(laureate => {
        console.log('-  ' + laureate);
      });
    });
}

function main() {
  const jsonString = readFileSync('./prize.json', 'utf8');
  const json = JSON.parse(jsonString);
  const prizes = json.prizes;

  const categories = prizes.map(prize => prize.category);
  const uniqueCategories = Array.from(new Set(categories));
  uniqueCategories.forEach(category => reportCategory(prizes, category));
}

main();
