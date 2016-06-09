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

One in particular - how to handle cases where a player runs out of cards during a War event. I think I could have taken care of it, but adding animations resulted in my JS becoming extremely convoluted, hard-to-understand, and bulky. So right now, the game just breaks. I could have just made that player lose, but I ran out of time.

In general - as I built in animations, I lost total control of the entire project. I can't even follow my own HTML and CSS, and a big part of my JS (the war event) doesn't make sense to me--I just know it works. My mindset is generally the ends justify the means, so I test things quickly to find a desirable outcome and then move on to the next issue/goal, so at the end, the code isn't well organized.

<h3>User Stories</h3>

 -
 -
