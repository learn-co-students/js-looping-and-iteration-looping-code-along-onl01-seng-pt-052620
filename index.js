function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

function countDown(timer) { 
    while( timer > 0 ) {
        console.log(timer);
        timer -=1;
    }
    console.log(timer);
}