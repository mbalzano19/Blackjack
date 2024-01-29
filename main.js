/* As user,...
- I want to be able to play a game of blackjack against the dealer (computer)
- I want to be able to make a wager before a game of Blackjack
- I want to be able to hit and get another card
- I want to be able to stand on end my turn
- I want to see my cards along with a count of my current score
- I want to see one of the dealers cards face up, the other face down at the start of the game
- I want to know who wins the round, and have my wager balance affected accordingly
/*

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

