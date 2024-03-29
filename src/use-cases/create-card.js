export const createCard = (card) => {
  if (!card) throw new Error('Card is required.');

  const imgCard = document.createElement('img');
  imgCard.src = `./cartas/${card}.png`;
  imgCard.classList.add('carta');

  return imgCard;
}
