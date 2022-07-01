

let cards = [];

let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");

let player = {
    name: "Junaid",
    chips: 145
};
// let playerName = "Junaid";
// let playerChips = 145;

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " $" + player.chips;


function getRandomCard() {
    let randomNum = Math.floor(Math.random()*13) + 1;
    if(randomNum === 1) {
        return 11;
    }else if(randomNum > 10) {
        return 10;
    }else {
        return randomNum;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function resetGame() {
    cardEl.textContent = "Cards: ";
    cards.length = 0;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sumEl.textContent = "Sum: ";
    sum = firstCard + secondCard;
    messageEl.textContent = "Want to play a round?";
    
}

function renderGame() {
    cardEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20) {
        message = "Do you want to draw a new card?";
    }else if(sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    }else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if(isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

