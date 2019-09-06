//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);
//console.log("User flipped " + cardThree);
//console.log("User flipped " + cardFour);

var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
},


];


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

console.log("User flipped " + cards[cardId].rank)
console.log(cards[cardId].cardImage)
console.log(cards[cardId].suit)
cardsInPlay.push(cards[cardId].rank)
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