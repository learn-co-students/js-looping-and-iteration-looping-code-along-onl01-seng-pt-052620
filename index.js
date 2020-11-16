// Code your solutions in this file
function countDown(positiveInt) {
  while(positiveInt >= 0) {
    console.log(positiveInt);
    positiveInt--;
  }
}

function writeCards(nameArray, eventName) {
  let cardArray = [];
  for (let i = 0; i < nameArray.length; i++) {
    cardArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`);
  };
  return cardArray;
}