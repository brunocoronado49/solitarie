import * as card from './use-cases/index';

const normals = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

let playerPoints = 0;
let computerPoints = 0;
let deck = [];

const btnGet = document.querySelector('#btnGetCard');
const btnPlay = document.querySelector('#btnPlay');
const btnStop = document.querySelector('#btnStop');
const divCardsPlayer = document.querySelector('#divCardsPlayer');
const divCardsComputer = document.querySelector('#divCardsComputer');
const htmlPoints = document.querySelectorAll('small');

deck = card.createDeck(normals, specials);

// Take a card event
btnGet.addEventListener('click', () => {
  console.log(deck.length)
  const cardDeck = card.getCard(deck);
  playerPoints += card.cardValue(cardDeck);
  htmlPoints[0].innerText = playerPoints;

  const imgCard = card.createCard(cardDeck);
  divCardsPlayer.append(imgCard);

  if (playerPoints > 21) {
    console.warn('You Lose.');
    btnGet.disabled = true;
    btnStop.disabled = true;
    card.computerTurn(playerPoints, htmlPoints[1], divCardsComputer, deck);
  } else if (playerPoints === 21) {
    console.warn('Congratulations! You get 21');
    btnGet.disabled = true;
    btnStop.disabled = true;
    card.computerTurn(playerPoints, htmlPoints[1], divCardsComputer, deck);
  }
});

// Stop the game event
btnStop.addEventListener('click', () => {
  btnGet.disabled = true;
  btnStop.disabled = true;
  card.computerTurn(playerPoints, htmlPoints[1], divCardsComputer, deck);
});

// Play event
btnPlay.addEventListener('click', () => {
  console.clear();
  deck = [];
  deck = card.createDeck(normals, specials);
  playerPoints = 0;
  computerPoints = 0;
  htmlPoints[0].innerText = 0;
  htmlPoints[1].innerText = 0;

  divCardsComputer.innerHTML = '';
  divCardsPlayer.innerHTML = '';
  btnGet.disabled = false;
  btnStop.disabled = false;
});