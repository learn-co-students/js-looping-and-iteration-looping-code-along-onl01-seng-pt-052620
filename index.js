function writeCards(string_names, event_name) {
    let new_array = [];
    for (let i = 0; i < string_names.length; i++) {
        new_array.push(`Thank you, ${string_names[i]}, for the wonderful ${event_name} gift!`)
    }
    return new_array 
}

function countDown(number) {
    while (number > -1) {
        console.log(number--);
    } 
}