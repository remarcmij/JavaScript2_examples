'use strict';

function getOVChipCard() {
  const RESERVATION_CHARGE = 4;
  const FARE_PER_SECOND = 0.2;
  let credit = 0;
  let tripFare = 0;
  let checkedIn = false;
  let timerId = null;

  function addCredit(amount) {
    credit += amount;
  }

  function checkIn() {
    if (checkedIn) {
      console.log('You are already checked in!');
      return false;
    }
    if (credit - RESERVATION_CHARGE < 0) {
      console.log('You do not have enough credit!');
      return false;
    }

    checkedIn = true;

    console.log('(Starting credit: €' + credit.toFixed(2) + ')');
    credit -= RESERVATION_CHARGE;
    console.log('(Remaining credit after reservation: €' + credit.toFixed(2) + ')');

    console.log('Goede reis!');

    timerId = setInterval(() => {
      tripFare += FARE_PER_SECOND;
      console.log('Fare: €' + tripFare.toFixed(2));
    }, 1000);

    return true;
  }

  function checkOut() {
    if (!checkedIn) {
      console.log('You are not checked in!');
      return false;
    }
    clearInterval(timerId);
    checkedIn = false;
    credit += RESERVATION_CHARGE - tripFare;

    console.log('Trip fare: €' + tripFare.toFixed(2));
    console.log('Credit remaining: €' + credit.toFixed(2));
    tripFare = 0;

    if (credit < 0) {
      console.log('You must add credit before you can travel again!');
    }
  }

  return {
    addCredit: addCredit,
    checkIn: checkIn,
    checkOut: checkOut
  };
}

const ovChipCard = getOVChipCard();
ovChipCard.addCredit(10);

if (ovChipCard.checkIn()) {
  setTimeout(() => ovChipCard.checkOut(), 8000);
}
