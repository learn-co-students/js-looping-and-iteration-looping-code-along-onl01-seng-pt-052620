// Code your solutions in this file
function writeCards(namesArray, event) {
    let cards = []
    for (let i = 0; i < namesArray.length; i++) {
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

function countDown(startingInteger) {
    while (startingInteger > 0) {
        console.log(startingInteger);
        startingInteger -= 1;
    }
    console.log(startingInteger);
}