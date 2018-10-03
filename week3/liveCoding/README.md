# Live-coding: OV-chipkaart Example

## Problem description

In this exercise we are going to simulate travelling with an OV-chipkaart:

1. When you get an OV-chipkaart there will be initially no credit on the card. Before you can travel you must deposit some money on the card.
2. To travel you need to have at least €4.00 credit. This is called the _boarding rate_ (in Dutch: 'instaptarief').
3. When you check in, your card will be charged with the €4.00 boarding rate. Note that in this simulation the trip fare is time-based rather than distance-based. The trip fare starts at zero and every second it will be increased by €0.20 (ouch!).
4. When you check out the €4.00 boarding rate will be refunded, minus the actual trip fare.
5. If the remaining credit on check out is negative you will be warned that you need to add credit before you can travel again.
6. If you try to check in without having checked out you will get a warning.
7. If you try to check out without having checked in you will get a warning.
