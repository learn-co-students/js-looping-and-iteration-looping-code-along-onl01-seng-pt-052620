// Code your solutions in this file

// for ([initialization]; [condition]; [iteration]) {
//   [loop body]
// }

function writeCards ( array, event) {
    let thankYouCards = []
    for ( let i = 0; i < array.length; i++ ) {
      thankYouCards.push( `Thank you, ${array[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }

const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  let i = 0; // the initialization moved OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }
 
  return gifts;
}

function countDown (i) {
    while (i > 0) {
        console.log(i);
        i -= 1;
    }
    console.log(i);
}