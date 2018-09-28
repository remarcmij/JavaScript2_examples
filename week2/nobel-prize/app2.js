const { readFileSync } = require('fs');

function getCategoryDetails(prizes, category) {
  const filteredPrizes = prizes.filter(prize => prize.category === category);

  const filteredPrizesTwoPlus = filteredPrizes.filter(prize => prize.laureates.length >= 2);

  const prizeDetails = filteredPrizesTwoPlus.map(prize => {
    const laureateNames = prize.laureates.map(laureate => laureate.firstname + ' ' + laureate.surname);
    return {
      year: prize.year,
      laureates: laureateNames
    };
  });

  return prizeDetails;
}

function reportCategory(prizes, category) {
  console.log(category.toUpperCase());

  const details = getCategoryDetails(prizes, category);

  details
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
