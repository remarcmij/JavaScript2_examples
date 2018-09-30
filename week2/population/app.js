// using JSON data obtained from:
// http://api.population.io/1.0/population/2010/United%20States/?format=json

// start of code that you will learn later in the Node module
const { readFileSync } = require('fs');
const jsonString = readFileSync('./data.json', 'utf8');
// start of code that you will learn later in the Node module

const items = JSON.parse(jsonString);

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

