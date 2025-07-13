const images = [
  'gigi.png',
  'mae.png',
  'leo.png',
  'urubu.png',
  'gigi-mae.png',
  'gigi-urubu.png'
];
const cards = [...images, ...images];
let firstCard = null;
let lockBoard = false;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(cards);

const board = document.querySelector('.game-board');
cards.forEach(image => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `<img src="img/${image}" alt="">`;
  card.addEventListener('click', () => {
    if (lockBoard || card.classList.contains('flipped')) return;
    card.classList.add('flipped');
    if (!firstCard) {
      firstCard = card;
    } else {
      const secondCard = card;
      if (firstCard.innerHTML === secondCard.innerHTML) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
      } else {
        lockBoard = true;
        setTimeout(() => {
          firstCard.classList.remove('flipped');
          secondCard.classList.remove('flipped');
          lockBoard = false;
        }, 1000);
      }
      firstCard = null;
    }
  });
  board.appendChild(card);
});
