/* As user,...
- I want to be able to play a game of blackjack against the dealer (computer)
- I want to be able to make a wager before a game of Blackjack
- I want to be able to hit and get another card
- I want to be able to stand on end my turn
- I want to see my cards along with a count of my current score
- I want to see one of the dealers cards face up, the other face down at the start of the game
- I want to know who wins the round, and have my wager balance affected accordingly
/*


/* what if I used an object to track the player card data. player1obj = { suit: h, rank: 05 }
can add new cards to this object as new entries = { {suit: h, rank: 05}, { suit: c, rank: J } }
Use that object to keep track of player - add rank values to calculate score - if rank value is a letter, write logic to convert to equivalent number value, and then create sum
sum is displayed on page for player to see their score
if sum is over 21, game over
meanwhile, each time a card is added to the playerObj or the dealerObj, that same card is removed from the deck of cards
should i just create an object with all of the cards?

create card items for display, card values that are generated coincide with how the card images are labeled
pulls correct card accordingly


/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

/*----- app's state (variables) -----*/
let deck
let playerCount
let dealerCount

/*----- cached element references -----*/


/*----- event listeners -----*/
const playButton = document.getElementById('play-button')
const hitButton = document.getElementById('hit-button')
const stayButton = document.getElementById('stay-button')
const betButton = document.getElementById('bet-button')
const playerRank1 = document.getElementById('player-rank-1')
const playerSuit1 = document.getElementById('player-suit-1')
const playerRank2 = document.getElementById('player-rank-2')
const playerSuit2 = document.getElementById('player-suit-2')
const playerScore = document.getElementById('player-score')

playButton.addEventListener('click', play)
hitButton.addEventListener('click', hit)
stayButton.addEventListener('click', stay)
betButton.addEventListener('click', bet)


/*----- functions -----*/

function getRandomRank() {
    return Math.floor(Math.random() * 13)
}

function getRandomSuit() {
    return Math.floor(Math.random() * 4)
}

function getPlayerCards() {
    playerRank1.textContent = ranks[getRandomRank()]
    playerSuit1.textContent = suits[getRandomSuit()]
    playerRank2.textContent = ranks[getRandomRank()]
    playerSuit2.textContent = suits[getRandomSuit()]
    console.log('playerRank1', playerRank1)
    console.log('playerRank2', playerRank2)
    if (playerRank1.textContent === 'J' || playerRank2.textContent === 'J') {
        playerRank1.textContent = 10
        playerRank2.textContent = 10
        console.log(playerRank1.textContent, 'playerRank1 textcontent')
        console.log(playerRank2.textContent, 'playerRank2 textcontent')
    }
    playerScore.innerHTML = playerRank1.textContent + playerRank2.textContent
}

function render() {
    playerRank1.textContent = ranks[getRandomRank()]
    playerSuit1.textContent = suits[getRandomSuit()]
    getPlayerCards()
    console.log('render')
}

function play() {
    console.log('play')
    render()
}

function hit() {
    console.log('hit')
}

function stay() {
    console.log('stay')
}

function bet() {
    console.log('bet')
}

