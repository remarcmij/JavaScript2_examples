'use strict';

function createOVChipCard() {
  let credit = 0;
  let tripFare = 0;
  let checkedIn = false;
  let timerId = null;
  const MIN_CREDIT = 1.5;
  const BOARDING_RATE = 4;

  function addCredit(amount) {
    credit += amount;
  }

  function getCredit() {
    return credit;
  }

  function addZoneTick() {
    tripFare += 0.2;
    console.log('Fare up to now: €' + tripFare.toFixed(2));
  }

  function checkIn() {
    if (checkedIn) {
      console.log('You are already checked in!');
      return true;
    }
    checkedIn = true;
    if (credit < MIN_CREDIT) {
      console.log('You do not have enough credit: €' + getCredit().toFixed(2));
      console.log('The minimum credit to travel is €' + MIN_CREDIT.toFixed(2));
      return false;
    }

    credit -= BOARDING_RATE;

    addZoneTick();

    timerId = setInterval(addZoneTick, 10);

    return true;
  }

  function checkOut() {
    if (!checkedIn) {
      console.log('If you see me something is terrible wrong');
    }

    clearInterval(timerId);

    credit = credit + BOARDING_RATE - tripFare;

    //...
    console.log('Good bye, credit left €' + getCredit().toFixed(2));
  }

  return {
    addCredit,
    getCredit,
    checkIn,
    checkOut
  };
}

function main() {
  const chipCard = createOVChipCard();

  chipCard.addCredit(10);

  console.log('Credit: €' + chipCard.getCredit().toFixed(2));

  if (chipCard.checkIn()) {
    setTimeout(chipCard.checkOut, 80);
  }
}

main();
