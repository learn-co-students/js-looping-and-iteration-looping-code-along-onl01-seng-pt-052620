// Code your solutions in this file

function writeCards(names, event){

    let array = []
    for(let i = 0; i < names.length; i++){
        array[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }

    return array;
}


function countDown(number){
    let i = 0;
    
    while (number >= i){
        console.log(number--);
    }
}
