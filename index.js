// Code your solutions in this file

// for loop
function writeCards(array, string){
    // empty array for return value
    const newArray = []
    // iteration
    for(let i = 0 ; i < array.length; i++){
    // push into an empty array
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    // return array with array and string
    return newArray;
}

let number = 10;
function countDown (number) {
  while (number >= 0) {
    console.log(number--);
  }
}