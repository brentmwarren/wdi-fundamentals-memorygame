//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);
//console.log("User flipped " + cardThree);
//console.log("User flipped " + cardFour);

const cards = ["queen","queen", "king", "king"]
const cardsInPlay = []

function checkForMatch() {
if ((cardsInPlay[0] === cardsInPlay[1]) && (cardsInPlay.length === 2)) {
  console.log("You found a match!");
} 
else if ((cardsInPlay.length === 2) && (cardsInPlay[0] !== cardsInPlay[1])) {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId) {

console.log("User flipped " + cards[cardId])
cardsInPlay.push(cards[cardId])
checkForMatch()
 if ((cardsInPlay.length === 2) && (cardsInPlay[0] === cardsInPlay[1])) {
alert("You found a match!");
}
else if ((cardsInPlay.length === 2) && (cardsInPlay[0] !== cardsInPlay[1])) {
alert("Sorry, try again.");
}


}

flipCard(0)
flipCard(2)