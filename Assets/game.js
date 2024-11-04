let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";

//Document Object Model
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//Player object
let player = {
    name: "Ragnar",
    chips: 5500
}
let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.chips

//function to get random number from 0-13
function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1){
        return 11;
    } else {
        return randomNumber
    }
}
//start function
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
//playing function
function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw new card?"
    } else if(sum===21){
        message = "congrats!, you've got blackjack!"
        hasBlackJack = true;
    } else {
        message = "you're out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message;
   
}
//funstion for displaying new card
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}
//end of code