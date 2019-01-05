// https://data.amsterdam.nl/#?dte=dcatd%2Fdatasets%2Feten-en-drinken&dtfs=T&dsf=groups::toerisme-cultuur&mpb=topografie&mpz=11&mpv=52.3731081:4.8932945

const { readFileSync } = require('fs');

const jsonString = readFileSync('./data.json', 'utf8');
const places = JSON.parse(jsonString);

console.log('Number of places to eat and/or drink in Amsterdam: ' + places.length);

const nearbyPlaces = places.filter(place => place.location.zipcode.startsWith('1018'));

console.log('Number of nearby places in postcode 1018: ' + nearbyPlaces.length);

const nearbyPlaceDetails = nearbyPlaces.map(place => {
  return {
    title: place.details.en.title,
    shortdescription: place.details.en.shortdescription,
    address: place.location.adress
  };
});

nearbyPlaceDetails.forEach(place => {
  console.log(place.title);
  console.log('  ' + place.shortdescription);
  console.log('  address: ' + place.address);
});
