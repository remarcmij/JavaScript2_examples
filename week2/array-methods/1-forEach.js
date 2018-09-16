'use strict';

const populationData = require('./app-population2010');

populationData.forEach(function (item) {
  const bar = '*'.string.repeat(item.ma)
  console.log()
  if (item.age === 63) {
    console.log(item);
  }
});
