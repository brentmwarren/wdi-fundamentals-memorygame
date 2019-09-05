//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);
//console.log("User flipped " + cardThree);
//console.log("User flipped " + cardFour);

const cards = ["queen","queen", "king", "king"]
const cardsInPlay = []

var cardOne = cards[0]
cardsInPlay.push(cardOne)
console.log(cardOne)

var cardTwo = cards[2]
cardsInPlay.push(cardTwo)
console.log(cardTwo)

if ((cardsInPlay.length === 2) && (cardsInPlay[0] === cardsInPlay[1])) {
alert("You found a match!");
}
else {
alert("Sorry, try again.");
}