<!-- Take a look at markdown: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet -->

<h1>War - reinvented</h1>

<sub>Not really.</sub>

<h3>Technologies used:</h3>

HTML (duh)
CSS (=bane)
JS/jquery

<h3>Approach Taken</h3>

I began by cannibalizing a previous HTML/CSS setup so I could focus on the code. After some thought, I created a simple array for the deck of cards, then found a good shuffle function to use. After that, it was a matter of manipulating arrays to imitate individual hands, with cards moving into a pot and being subsequently deposited into the winner's stack.

After getting the basic mechanics down, I created a solid function to handle War events; one that could loop as many times as needed for consecutive war situations.

At that point, I felt the game was mostly complete, and I started adding options (in-game shuffling & multiple decks), as well as animations. The animations alone took about twice as long to get working as the entire Javascript game.

<h3>Installation Instructions</h3>

Go to <a href="http://wombatdev.github.io/the-game-of-war/">http://wombatdev.github.io/the-game-of-war/</a>. Bam.

<h3>Unsolved Problems</h3>

Two in particular:

1) This isn't really an unsolved problem, but I never added anything indicating where the user needs to click. So someone stumbling upon this website would have no idea. Easy fix, but I ran out of time.

2) How to handle cases where a player runs out of cards during a War event. I think I could have taken care of it, but adding animations resulted in my JS becoming extremely convoluted, hard-to-understand, and bulky. So right now, the game just breaks. I could have just made that player lose, but I ran out of time.

In general - as I built in animations, I lost total control of the entire project. I can't even follow my own HTML and CSS, and a big part of my JS (the war event) doesn't make sense to me--I just know it works. My mindset is generally the ends justify the means, so I test things quickly to find a desirable outcome and then move on to the next issue/goal, so at the end, the code isn't well organized.

<h3>User Stories</h3>

 - As a user, I want a standard 52-card deck of cards to be shuffled and split into two piles.
 - I want two cards to flip over--one for me, and one for my opponent.
 - I want the winner of that hand to have the higher-numbered card.
 - I want the winner to have both cards added to their pile.
 - I want one player to win the game when they hold all 52 cards.
 - I want to be able to play with more than 52 cards--multiple decks.
 - I want to be able to start over at any time.
 - When the two played cards are an equal number, I want there to be a war--each player flips over three cards, and the higher card between the final pair wins the entire pot.
