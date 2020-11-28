const names = ['Lisa', 'Kaitlin', 'Jan'];
function writeCards(names) {
    let birthday = [];
    for (let i = 0; i < names.length; i++) {
        birthday[i] = 'Thank you, ' + names[i] + ', for the wonderful surprise gift!';
    }
    return birthday;
}

let number = 10;
function countDown(number){
    while (number >= 0){
        console.log(number--);
    }
}

 