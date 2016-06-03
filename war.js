
var deckOfCards = ['H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H13', 'H14', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11', 'S12', 'S13', 'S14'];
var playerDeck = [];
var computerDeck = [];

function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

function deal(array) {
    for (i = 0; i < array.length-1; i++ ) {
        if ((i+2)%2 == 0) {
            playerDeck.push(array[i]);
        }
        else {
            computerDeck.push(array[i]);
        }
    }
}


// $(document).on("ready", function() {


// function shuffle (array) {
//   var i = 0
//     , j = 0
//     , temp = null
//
//   for (i = array.length - 1; i > 0; i -= 1) {
//     j = Math.floor(Math.random() * (i + 1))
//     temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
//   }
// }

// function Card (rank, suit) {
//     this.rank = rank;
//     this.suit = suit;
// };
// function Deck() {
//     this.deck = new Array();
//     this.makeDeck = makeDeck;
//     this.shuffle = shuffle;
//     this.deal = deal;
// };
// function makeDeck() {
//     var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K");
//     var suits = new Array("Clubs", "Diamonds", "Hearts", "Spades");
//     var deckOfCards = [];
//     var i, j;
//     for (i = 0; i < suits.length; i++) {
//         for (j = 0; j < ranks.length; j++) {
//             deckOfCards[i] = new Card(ranks[j], suits[i])
//             console.log("Card made \n");
//         }
//     }
// };
// function shuffleTheDeck() {
// debugger
//     Card();
// debugger
//     Deck();
// debugger
//     makeDeck();
// debugger
// }
//     function shuffle() {
//         var i, n, j, temp;
//         for (i = 0; i < n; i++) {
//             for (j = 0; j < this.deck.length; j++) {
//                 k = Math.floor(Math.random() * this.deck.length);
//                 temp = this.deck[j];
//                 this.deck[j] = this.deck[k];
//                 this.deck[k] = temp;
//             }
//         }
//         document.write("Cards Shuffled");
//     };
//
//
//
//     function deal() {
//
//         if (this.deck.length > 0) {
//             return this.deck.shift();
//         }
//         else return null;
//     };
//
//     var deck = new Deck();
//
//     deck.makeDeck();
//     deck.shuffle();
//     for (i = 0; i < 2; i++) {
//         for (j = 0; j < 5; j++) {
//             var Card = new Card(deck.deal);
//             var c = JSON.stringify(Card);
//             document.write(this.deck[j]);
//         }
//     }
//
//
// };




















// DOC ON READY END TAG
// });
