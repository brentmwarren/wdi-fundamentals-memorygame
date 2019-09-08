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
  		alert("You found a match!");
	} 
	else if ((cardsInPlay.length === 2) && (cardsInPlay[0] !== cardsInPlay[1])) {
  		alert("Sorry, try again.");
	}
}

function flipCard() {
	const cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src',cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch();

	}

	
}

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
 	cardElement.setAttribute('src', "images/back.png");
 	cardElement.setAttribute('data-id', i);
 	cardElement.addEventListener('click', flipCard);
// As the last piece of the for loop, append the cardElement to the game board (which has an id of game-board).
//Hint: use the appendChild() method to do this.
	document.getElementById('game-board').appendChild(cardElement);

	}

}

/* checkForMatch()
 if ((cardsInPlay.length === 2) && (cardsInPlay[0] === cardsInPlay[1])) {
alert("You found a match!");
}
else if ((cardsInPlay.length === 2) && (cardsInPlay[0] !== cardsInPlay[1])) {
alert("Sorry, try again.");
}
}
*/


createBoard();











