//card class and methods
function Card(name, suit) {
  this.name = name;
  this.suit = suit;
//switch statement for each card name to add point value
  switch (this.name) {
    case 'ace':
      this.points = 11;
      break;
    case 'jack':
      this.points = 10;
      break;
    case 'queen':
      this.points = 10;
      break;
    case 'king':
      this.points = 10;
      break;
    case '10':
      this.points = 10;
      break;
    case '9':
      this.points = 9;
      break;
    case '8':
      this.points = 8;
      break;
    case '7':
      this.points = 7;
      break;
    case '6':
      this.points = 6;
      break;
    case '5':
      this.points = 5;
      break;
    case '4':
      this.points = 4;
      break;
    case '3':
      this.points = 3;
      break;
    case '2':
      this.points = 2;
      break;
  }
}
Card.prototype.getImageUrl = function() {
    return 'images/' + this.point + '_of_' + this.suit + '.svg'
};

//Deck Class and Methods
function Deck() {
  this.dZeck = [];
};
Deck.prototype.create = function () {
  this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
  this.suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  for( var s = 0; s < this.suits.length; s++ ) {
    for( var n = 0; n < this.names.length; n++ ) {
      this.dZeck.push( new Card(this.names[n], this.suits[s]) );
    }
  }
}
Deck.prototype.draw = function () {
  return this.dZeck.card[0];
  this.dZeck.shift();
};
Deck.prototype.shuffle = function (this.Dzeck) {
  //pizzapanther shuffle.js
  for (var i = this.Dzeck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.Dzeck[i];
        this.Dzeck[i] = this.Dzeck[j];
        this.Dzeck[j] = temp;
    };
    return array;
};

//Hand class and Methods
function Hand() {
  this.cards = [];
};

Hand.prototype.getPoints = function() {
  var handPoints = 0;
  for (i = 0; i < this.cards.length; i++) {
    handPoints += this.cards[i].point;
  };
  return handPoints;
};
var firstDeck = new Deck();
dealerHand = new Hand()
playerHand = new Hand()
playerHand.cards = firstDeck.draw();
dealerHand.cards = firstDeck.draw();


function deal() {
  for ( var i = 0; i < 2; i++) {
    playerHand.cards = firstDeck.draw();
    dealerHand.cards = firstDeck.draw();  
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
  playerPoints = 0;
  for ( var i = 0; i < playerHand.length; i++ ) {
    playerPoints += playerHand[i].points;
  }
}
var dealerPoints = 0;
function calculateDealerPoints() {
  dealerPoints = 0;
  for ( var i = 0; i < dealerHand.length; i++ ) {
    dealerPoints += dealerHand[i].points;
  }
}

console.log(deck);
$(document).ready(function () {
  //when deal is clicked run deal function and add images
  $('#deal-button').click(function () {
    deal();
    calculatePlayerPoints();
    calculateDealerPoints();
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
    $('#deal_points').replaceWith('Dealer: ' + dealerPoints);
    $('#play_points').replaceWith('Player: ' + playerPoints);
  });
  //when hit button clicked run hit function and add image
  $('#hit-button').click( function () {
    hit();
    calculatePlayerPoints();
    //figure out how to get next playerHand index  and new playerPoints on hit
    $('#player-hand').append('<img src="images/cards/' + playerHand[0].name + '_of_'
    + playerHand[0].suit + '.svg">'
    );
    $('#play_points').replaceWith('Player: ' + playerPoints);
  });
});
