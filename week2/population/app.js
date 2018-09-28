// http://api.population.io/1.0/population/2010/United%20States/?format=json
const { readFileSync } = require('fs');
const jsonString = readFileSync('./data.json', 'utf8');
const items = JSON.parse(jsonString);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

const femaleNumbers = items.map(item => item.females);

const maxFemales = Math.max(...femaleNumbers);

const MAX_STARS = 50;

const bars = items
  .sort((a, b) => a.age - b.age)
  .map(item => {
    const stars = Math.round(item.females / maxFemales * MAX_STARS);
    return {
      age: item.age,
      stars: stars
    };
  });

bars.forEach(bar => {
  console.log('*'.repeat(bar.stars) + ' ' + bar.age);
});

