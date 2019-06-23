'use strict';

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
    if (isCheckedIn) {
      console.log('You are already checked in!');
      return false;
    }
    if (credit <= 0) {
      console.log('You do not have enough credit!');
      return false;
    }

    credit -= BOARDING_FARE;
    isCheckedIn = true;

    console.log('Goede reis!');
    return true;
  }

  function checkOut(distanceInKm) {
    if (!isCheckedIn) {
      console.log('You are not checked in!');
      return;
    }

    const tripFare = distanceInKm * GVB_KILOMETER_FARE + BASE_FARE;
    credit += BOARDING_FARE - tripFare;
    isCheckedIn = false;

    console.log('Trip fare: €' + tripFare.toFixed(2));
    console.log('Credit remaining: €' + credit.toFixed(2));
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
