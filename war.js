
var deckOfCards = ['H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H13', 'H14', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11', 'S12', 'S13', 'S14'];
var playerDeck = [];
var computerDeck = [];
var playerCard;
var computerCard;
var playerWarCard;
var computerWarCard;
var pot = [];
var theWinner;
var winner;
var clickDelay = 0;


$(document).on("ready", function() {

    var decksInUse = 0;
    var playerCount = 0;
    var computerCount = 0;

$(".decks input").on("click", function () {
    shuffle(deckOfCards);
    deal(deckOfCards);
    decksInUse++;
    $(".deckcount").html(decksInUse);
    updateCounts();
})

$(".shuffle input").on("click", function () {
    shuffle(playerDeck);
    shuffle(computerDeck);
})

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

// When the user clicks on their stack of cards...
$(".click img").on("click", function() {

    if (playerDeck.length == 0) {
        alert("You need to add a deck to have cards to play with!");
        return;
    }

    if (clickDelay != 0 ) {
        return;
    }

    else {
        clickDelay = 1;

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

    console.log(playerDeck.length, computerDeck.length);

    if (playerDeck.length == 0 || computerDeck.length == 0) {
        winning();
    }

    setTimeout(function () {
        clickDelay = 0;
    }, 2000);
    }
});

$(".reset input").on("click", reset);

function reset () {
    decksInUse = 0;
    $(".deckcount").html(decksInUse);
    playerDeck = [];
    computerDeck = [];
    updateCounts();
}

// Every time a card is flipped:
function handInPlay () {

    //The first card in the stack becomes the card in play.
    playerCard = playerDeck[0];
    computerCard = computerDeck[0];
    console.log(playerCard+", "+computerCard);

    // Update the images of the cards in play.
    $(".cardstack.active").css("z-index", 15);
    $("<img class='front real' src='cards/playerstack.jpg' alt='player stack' width=100% height=100% /><img class='back real' src=cards/"+playerCard+".png alt='player card' width=100% height=100% />").appendTo(".player.card");
    $("<img class='front real' src='cards/computerstack.jpg' alt='computer stack' width=100% height=100% /><img class='back real' src=cards/"+computerCard+".png alt='computer card' width=100% height=100% />").appendTo(".computer.card");
    $(".card").css("overflow", "visible");
    $(".card").addClass("flipped");


    // Both cards are now part of the winner's pot and are removed from their original stacks.
    pot.push(playerCard, computerCard);
    playerDeck.shift();
    computerDeck.shift();
    updateCounts();
}

// If the player wins, add the pot to the bottom of their stack.
function playerWinsHand () {
    playerDeck = playerDeck.concat(pot);
    winner = 0;
    endOfTurn();
}

// Same thing for the computer.
function computerWinsHand () {
    computerDeck = computerDeck.concat(pot);
    winner = 1;
    endOfTurn();
}

// If there is a war...
function warEvent () {

    // Assign the war card (3rd card in) for each player to be used in the if clauses.
    playerWarCard = playerDeck[2];
    computerWarCard = computerDeck[2];

    $(".warbox").animate({top: "+=700px"}, "medium", "linear", function() {
        setTimeout(function() {
            ($(".warbox").animate({top: "-=700px"}, "fast"));
        }, 350);
    });

    function chainFunctions(functions){
        var index = 0;
        next();

        function next(){
            var currentFunction = functions[index];
            if(currentFunction) currentFunction(next);
            index += 1;
        }
    }
    chainFunctions([
        function(next){
            setTimeout(function(){
                $(".card").css("visibility", "hidden");
                $(".card").removeClass("flipped");
                next();
            }, 2000);
        },
        function(next){
            setTimeout(function(){
                $(".card").css("visibility", "visible");
                handInPlay();
                next();
            }, 1500);
        },
        function(next){
            setTimeout(function(){
                $(".card").css("visibility", "hidden");
                $(".card").removeClass("flipped");
                next();
            }, 2000);
        },
        function(next){
            setTimeout(function(){
                $(".card").css("visibility", "visible");
                handInPlay();
                next();
            }, 1500);
        },
        function(next){
            setTimeout(function(){
                $(".card").css("visibility", "hidden");
                $(".card").removeClass("flipped");
                next();
            }, 2000);
        },
        function(next){
            setTimeout(function(){
                $(".card").css("visibility", "visible");
                handInPlay();
                next();
            }, 1500);
        },
        function(next){
            setTimeout(function(){
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
                next();
            }, 1000);
        }
    ]);
}

function endOfTurn () {
    setTimeout( function(){
        $(".card").css("visibility", "hidden");
        if (winner == 0) {
            $(".real").css("transform", "translate(1000px,-1000px)").css("transition","all 0.25s ease-in-out");
        }
        else {
            $(".real").css("transform", "translate(-1000px,-1000px)").css("transition","all 0.25s ease-in-out");
        }
        updateCounts();
        setTimeout( function(){
            $(".real").remove();
            $(".card").removeClass("flipped");
            setTimeout( function(){
                $(".cardstack.active").css("z-index", 5);
                $(".card").css("overflow", "hidden");
                $(".card").css("visibility", "visible");
            }, 750);
        }, 150);
    }, 1000);
    pot = [];
}

function updateCounts () {
    playerCount = playerDeck.length;
    computerCount = computerDeck.length;
    $("#playercount").html(playerCount);
    $("#computercount").html(computerCount);
}

function winning () {
    if (playerDeck.length == 0) {
        $(".winner").html("The computer wins!");
    }

    if (computerDeck.length == 0) {
        $(".winner").html("You win!");
    }

    $(".winner").animate({top: "+=700px"}, "slow", "linear", function() {
        setTimeout(function() {
            ($(".winner").delay(1000).animate({top: "-=700px"}, "slow"));
        }, 350);
    });

    reset();
}


//DOC ON READY END TAG
});
