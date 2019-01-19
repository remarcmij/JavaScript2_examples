'use strict';

// https://www.ov-chipkaart.nl/everything-about-travelling/price-list/boarding-fare-and-basic-fare.htm
// https://www.gvb.nl/saldo

function createOVChipCard(startCredit = 0) {
  const BOARDING_FARE = 4;
  const BASE_FARE = 0.96;
  const GVB_KILOMETER_FARE = 0.16;
  let credit = startCredit;
  let tripFare = 0;
  let isCheckedIn = false;
  let timerId = null;

  function addKilometerFare() {
    tripFare += GVB_KILOMETER_FARE;
    console.log('Fare: €' + tripFare.toFixed(2));
  }

  function addCredit(amount) {
    credit += amount;
  }

  function getCredit() {
    return credit;
  }

  function startTimer() {
    timerId = setInterval(addKilometerFare, 1000);
  }

  function stopTimer() {
    clearInterval(timerId);
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

    isCheckedIn = true;
    tripFare = BASE_FARE;

    console.log('(Starting credit: €' + credit.toFixed(2) + ')');
    credit -= BOARDING_FARE;
    console.log('(Remaining credit after reservation: €' + credit.toFixed(2) + ')');

    console.log('Goede reis!');

    addKilometerFare();

    startTimer();

    return true;
  }

  function checkOut() {
    if (!isCheckedIn) {
      console.log('You are not checked in!');
      return;
    }
    stopTimer();
    isCheckedIn = false;
    credit += BOARDING_FARE - tripFare;

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
    setTimeout(() => ovChipCard.checkOut(), 4000);
  }
}

main();
