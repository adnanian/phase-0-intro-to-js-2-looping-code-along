// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
const names = ["Steve", "Joe", "Abe"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

function writeCards(names, event) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
        cards[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return cards;
} 

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

wrapGifts(gifts);
writeCards(names, "birthday");
