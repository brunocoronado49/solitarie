import { cardValue, getCard, createCard } from './index';

export const computerTurn = (minPoints, htmlPoits, divCardsPC, deck = []) => {
  if (!minPoints) throw new Error('Minimum points required.');
  if (!htmlPoits) throw new Error('Html points required.');
  
  let computerPoints = 0;
  do {
    const card = getCard(deck);
    computerPoints += cardValue(card);
    htmlPoits.innerText = computerPoints;
    const imgCard = createCard(card);
    divCardsPC.append(imgCard);
  } while ((computerPoints < 0) && (minPoints <= 21));

  setTimeout(() => {
    if (computerPoints === minPoints) {
      alert('Both players win!');
    } else if ((minPoints > 21) || (computerPoints <= 21)) {
      alert('Computer wins!');
    } else if ((minPoints <= 21) || (computerPoints > 21)) {
      alert('Player wins!');
    }
  }, 1000);
}

