// Code your solutions in this file
for (let age = 30; age < 40; age++ ) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}



const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    // debugger;
  }

  return gifts;
}

wrapGifts(gifts); 



//FOR LOOP
const names = ['Ada', 'Brendan', 'Ali'];

function writeCards(names, event) {
    const newArray = [];
    for (let i = 0; i < names.length; i++ ) {
        let string = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        newArray.push(string);
    }

    console.log(newArray);
    return newArray;
}

writeCards(names, 'birthday');


//WHILE LOOP
function countDown(num) {
    let i = num;
    while (i >= 0 ){
        console.log(i--);
    }
}

countDown(10);