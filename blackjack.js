function card(name, suit, points) {
  this.name = name;
  this.suit = suit;
  this.points = points;
}

var deck = [];
function createDeck() {
  this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
  this.suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  for( var s = 0; s < this.suits.length; s++ ) {
    for( var n = 0; n < this.names.length; n++ ) {
      deck.push( new card(this.names[n], this.suits[s], function() {
        if (this.names[n] == 'ace') {
          return 11;
        } else if (this.names[n] == 'jack' || 'queen' || 'king') {
          return 10;
        } else {
          return parseInt(this.names[n]);
        }
      } ) );
    }
  }
}
createDeck();
var dealerHand = [];
var playerHand = [];
// after deck is created assign point value to cards based on name
function assignPoints () {
  for ( var i = 0; i < deck.length; i++ ) {
    for (j in card) {
      if (card.name == 'ace') {
        this.points = 11;
      } else if (card.name == 'jack' || 'queen' || 'king') {
        this.points = 10;
      } else {
        card.points = parseInt(card.name);
      }
    }
  }
}
assignPoints();
function deal() {
  for ( var i = 0; i < 2; i++) {
    //append top card object to playerHand array then delete from deck
    playerHand.push( new card(deck[0].name, deck[0].suit) );
    deck.shift();
    //append top card object to dealerHand array then delete from deck
    dealerHand.push( new card(deck[0].name, deck[0].suit) );
    deck.shift();
  }
  console.log(dealerHand);
  console.log(playerHand);
}

function hit() {
  //append top card object to playerhand array then delete from deck
  playerHand.push( new card(deck[0].name, deck[0].suit) );
  deck.shift();
}
var playerPoints = 0;
function calculatePlayerPoints() {
  for ( var i = 0; i < playerHand.length; i++ ) {
    playerPoints += playerHand[i].points;
  }
}
var dealerPoints = 0;
function calculatePlayerPoints() {
  for ( var i = 0; i < dealerHand.length; i++ ) {
    dealerPoints += dealerHand[i].points;
  }
}

console.log(deck);
$(document).ready(function () {
  //when deal is clicked run deal function and add images
  $('#deal-button').click(function () {
    deal();
    var playerHand0Name = playerHand[0].name;
    var playerHand0Suit = playerHand[0].suit;
    var playerHand1Name = playerHand[1].name;
    var playerHand1Suit = playerHand[1].suit;
    var dealerHand0Name = dealerHand[0].name;
    var dealerHand0Suit = dealerHand[0].suit;
    var dealerHand1Name = dealerHand[1].name;
    var dealerHand1Suit = dealerHand[1].suit;
    $('#player-hand').append('<img src="images/cards/' + playerHand0Name + '_of_'
    + playerHand0Suit + '.svg">' +
    '<img src="images/cards/' + playerHand1Name + '_of_'
    + playerHand1Suit + '.svg">'
    );
    $('#dealer-hand').append('<img src="images/cards/' + dealerHand0Name + '_of_'
    + dealerHand0Suit + '.svg">' +
    '<img src="images/cards/' + dealerHand1Name + '_of_'
    + dealerHand1Suit + '.svg">'
    );
  });
  //when hit button clicked run hit function and add image
  $('#hit-button').click( function () {
    hit()
    $('#player-hand').append('<img src="images/cards/' + playerHand[0].name + '_of_'
    + playerHand[0].suit + '.svg">'
    );
  });
});
