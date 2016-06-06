
var deckOfCards = ['H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H13', 'H14', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11', 'S12', 'S13', 'S14'];
var playerDeck = [];
var computerDeck = [];
var playerCard;
var computerCard;
var playerWarCard;
var computerWarCard;
var pot = [];


$(document).on("ready", function() {

// I found this shuffle function online
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

// To deal the "array" of cards...
function deal(array) {

    // Loop a function 52 times...
    for (i = 0; i < array.length; i++ ) {

        // Dealing every other card to the Player...
        if ((i+2)%2 == 0) {
            playerDeck.push(array[i]);
        }

        // And every other card to the computer.
        else {
            computerDeck.push(array[i]);
        }
    }
}

// Clicking on the title runs the shuffle and deal functions.
$(".title").on("click", function() {
    shuffle(deckOfCards);
    deal(deckOfCards);
    console.log(playerDeck);
    console.log(playerDeck.length);
    console.log(computerDeck);
    console.log(computerDeck.length);
});

// When the user clicks on their stack of cards...
$(".click img").on("click", function() {

    // See below.
    handInPlay();

    // Either the player's card is higher...
    if ( parseInt ( playerCard.substring(1) ) > parseInt ( computerCard.substring(1) ) ) {
        playerWinsHand ();
    }

    // Or the computer's card is higher...
    else if ( parseInt ( playerCard.substring(1) ) < parseInt ( computerCard.substring(1) ) ) {
        computerWinsHand();
    }

    // Or there's a war.
    else {
        warEvent();
    }

    pot = [];

    console.log(playerDeck.length, computerDeck.length);

    if (playerDeck.length == 0) {
        console.log("the computer wins!");
    }

    if (computerDeck.length == 0) {
        console.log("the player wins!");
    }

});

// Every time a card is flipped:
function handInPlay () {

    //The first card in the stack becomes the card in play.
    playerCard = playerDeck[0];
    computerCard = computerDeck[0];
    console.log(playerCard+", "+computerCard);

    // Update the images of the cards in play.
    $(".cardstack.active").css("z-index", 15);
    $(".player.card").find(".back").html("<img src='cards/"+playerCard+".png' width=100% height=100% />");
    $(".computer.card").find("back").html("<img src='cards/"+computerCard+".png' width=100% height=100% />");
    $(".card").addClass("flipped");
    $(".card").css("overflow", "visible");


    // Both cards are now part of the winner's pot and are removed from their original stacks.
    pot.push(playerCard, computerCard);
    playerDeck.shift();
    computerDeck.shift();
}

// If the player wins, add the pot to the bottom of their stack.
function playerWinsHand () {
    playerDeck = playerDeck.concat(pot);
}

// Same thing for the computer.
function computerWinsHand () {
    computerDeck = computerDeck.concat(pot);
}

// If there is a war...
function warEvent () {

    // Assign the war card (3rd card in) for each player to be used in the if clauses.
    playerWarCard = playerDeck[2];
    computerWarCard = computerDeck[2];

    // Then run the handInPlay function 3 times to account for the cards entering the pot.
    for (i=0; i<3; i++) {
        handInPlay();
    }

    // Then follow the usual winning hand functions...
    if ( parseInt ( playerWarCard.substring(1) ) > parseInt ( computerWarCard.substring(1) ) ) {
        playerWinsHand();
    }
    else if ( parseInt ( playerWarCard.substring(1) ) < parseInt ( computerWarCard.substring(1) ) ) {
        computerWinsHand();
    }

    // Or begin a new war event.
    else {
        warEvent();
    }
}

function cardFlyOff () {
    
}

function endOfTurnReset () {
    $(".cardstack.active").css("z-index", 5);
    $(".card").removeClass("flipped");
    $(".card").css("overflow", "hidden");
}


//DOC ON READY END TAG
});
