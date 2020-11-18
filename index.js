function writeCards(nameArr, eventName) {
    const cardsArr = []
    for (let i = 0; i < nameArr.length; i++) {
        cardsArr.push(`Thank you, ${nameArr[i]}, for the wonderful ${eventName} gift!`);
    }
    return cardsArr
}


function countDown(int) {
    while (int >= 0) {
        console.log(int--);
    }
}