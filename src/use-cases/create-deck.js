import { shuffle } from 'underscore';

export const createDeck = (normalCards, specialCards) => {
  if (!normalCards || normalCards.length === 0) throw new Error('Normal cards is required');
  if (!specialCards || specialCards.length === 0) throw new Error('Special cards is required');

  let deck = [];

  // normal cards management
  for (let i = 0; i <= 10; i++) {
    for(let type of normalCards) {
      deck.push(i + type);
    }
  }

  // Special cards managemnet
  for (let type of normalCards) {
    for (let special of specialCards) {
      deck.push(special + type);
    }
  }

  return shuffle(deck);
}

