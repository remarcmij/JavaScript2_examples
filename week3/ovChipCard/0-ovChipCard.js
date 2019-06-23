'use strict';

// https://www.ov-chipkaart.nl/everything-about-travelling/price-list/boarding-fare-and-basic-fare.htm
// https://www.gvb.nl/saldo

function createOVChipCard(startCredit = 0) {
  const BOARDING_FARE = 4;
  const BASE_FARE = 0.96;
  const GVB_KILOMETER_FARE = 0.16;
  let credit = startCredit;
  let isCheckedIn = false;

  function addCredit(amount) {
    credit += amount;
  }

  function getCredit() {
    return credit;
  }

  function checkIn() {
    // ...
    console.log('Goede reis!');
  }

  function checkOut(distanceInKm) {
    // ...
    console.log('Tot ziens!');
  }

  return {
    addCredit: addCredit,
    getCredit: getCredit,
    checkIn: checkIn,
    checkOut: checkOut
  };
}

function main() {
  const ovChipCard = createOVChipCard(10);

  console.log('Credit: €' + ovChipCard.getCredit().toFixed(2));

  if (ovChipCard.checkIn()) {
    setTimeout(() => ovChipCard.checkOut(4), 4000);
  }
}

main();
