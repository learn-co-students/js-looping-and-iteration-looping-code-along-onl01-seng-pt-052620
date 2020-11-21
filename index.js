// Code your solutions in this file

function writeCards( arrayName, eventName ) {
  let cardArray = []
  for (let i = 0; i < arrayName.length; i++) {
    cardArray.push(`Thank you, ${arrayName[i]}, for the wonderful ${eventName} gift!`);
  }
  return cardArray;
}


function countDown(number) {
  while (number > 0) {
    console.log(number);
    number--;
  }
  console.log(number);

}
