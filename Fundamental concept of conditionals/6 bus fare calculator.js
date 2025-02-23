/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 60;
const isStudent = true;
var ticketFare = 800;

if (age < 10) {
    console.log('Children get free ticket');
}

else if (isStudent === true &&  age >= 5 && age <= 18) {
    var discountedPrice = ticketFare * 50/100;
    var ticketFareNew = ticketFare - discountedPrice;

    console.log('You get 50% discount. Your payable amount now ' + ticketFareNew);
}

else if (age >= 60) {
    var discountedPrice = ticketFare * 15/100;
    var ticketFareNew = ticketFare - discountedPrice;
    console.log('You get 15% discount. Your payable amount now ' + ticketFareNew);
}

else {
    console.log('Regular ticket fare is ' + ticketFare);
}



