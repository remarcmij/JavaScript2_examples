'use strict';

// https://www.ov-chipkaart.nl/everything-about-travelling/price-list/boarding-fare-and-basic-fare.htm
// https://www.gvb.nl/saldo

const BOARDING_FARE = 4;
const BASE_FARE = 0.96;
const GVB_KILOMETER_FARE = 0.16;

function OvChipCard(startCredit = 0) {
  this.credit = startCredit;
  this.isCheckedIn = false;
}

OvChipCard.prototype.addCredit = function(amount) {
  this.credit += amount;
};

OvChipCard.prototype.getCredit = function() {
  return this.credit;
};

OvChipCard.prototype.checkIn = function() {
  if (this.isCheckedIn) {
    console.log('You are already checked in');
    return false;
  }
  if (this.credit <= 0) {
    console.log('You cannot travel, please recharge first.');
    return false;
  }

  this.credit -= BOARDING_FARE;
  this.isCheckedIn = true;
  console.log('Goede reis!');
  return true;
};

OvChipCard.prototype.checkOut = function(distanceInKm) {
  if (!this.isCheckedIn) {
    console.log('WTF You are not checked, call the helpdesk');
    return false;
  }

  this.isCheckedIn = false;
  this.credit += BOARDING_FARE;

  const cost = BASE_FARE + distanceInKm * GVB_KILOMETER_FARE;
  this.credit -= cost;

  console.log(`Travel cost: ${cost.toFixed(2)}`);
  console.log(`Credit: ${this.credit.toFixed(2)}`);
  console.log('Tot ziens!');

  return true;
};

function main() {
  const ovChipCard = new OvChipCard(10);

  console.log('Credit: €' + ovChipCard.getCredit().toFixed(2));

  if (ovChipCard.checkIn()) {
    setTimeout(() => ovChipCard.checkOut(4), 4000);
  }
}

main();
