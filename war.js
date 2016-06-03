
var deckOfCards = ['H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H13', 'H14', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11', 'S12', 'S13', 'S14'];
var playerDeck = [];
var computerDeck = [];
var playerCard;
var computerCard;
var playerScore = 0;
var computerScore = 0;


$(document).on("ready", function() {

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
    for (i = 0; i < array.length; i++ ) {
        if ((i+2)%2 == 0) {
            playerDeck.push(array[i]);
        }
        else {
            computerDeck.push(array[i]);
        }
    }
}

$(".title").on("click", function() {
    shuffle(deckOfCards);
    deal(deckOfCards);
    console.log(playerDeck);
    console.log(playerDeck.length);
    console.log(computerDeck);
    console.log(computerDeck.length);
});

$(".click img").on("click", function() {
    playerCard = playerDeck[0];
    computerCard = computerDeck[0];
    console.log(playerCard, computerCard);
    $("#player").find(".cardstack.active").html("<img src='cards/"+playerCard+".png' width=100% />");
    $("#computer").find(".cardstack.active").html("<img src='cards/"+computerCard+".png' width=100% />");
    if ( parseInt ( playerCard.substring(1) ) > parseInt ( computerCard.substring(1) ) ) {
        playerScore++;
        playerDeck.shift();
        computerDeck.shift();
        playerDeck.push(playerCard, computerCard);
    }
    else if ( parseInt ( playerCard.substring(1) ) < parseInt ( computerCard.substring(1) ) ) {
        computerScore++;
        playerDeck.shift();
        computerDeck.shift();
        computerDeck.push(computerCard, playerCard);
    }

    else {
        playerDeck.shift();
        playerDeck.push(playerCard);
        computerDeck.shift();
        playerDeck.push(computerCard);
    }
    console.log("Player score: "+playerScore+", Computer score: "+computerScore);


    console.log(playerDeck.length, computerDeck.length);

    if (playerDeck.length == 0) {
        console.log("the computer wins!");
    }

    if (computerDeck.length == 0) {
        console.log("the player wins!");
    }

});




//DOC ON READY END TAG
});
