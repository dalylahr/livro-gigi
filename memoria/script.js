const cardsArray = [
  'gigi.png',
  'gigi-mae.png',
  'gigi-urubu.png',
  'leo.png',
  'lobo.png',
  'mae.png',
  'arara.png',
  'urubu.png',
  'placa.png',
  'preservada.png',
  'tatu.png'
];

let selectedCards = [];
let matchedCards = [];

function createCard(src) {
  const card = document.createElement('div');
  card.classList.add('memory-card');
  card.dataset.image = src;

  const front = document.createElement('img');
  front.src = `img/${src}`;
  front.classList.add('front-face');

  const back = document.createElement('div');
  back.classList.add('back-face');

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', flipCard);

  return card;
}

function flipCard() {
  if (this.classList.contains('flipped') || selectedCards.length >= 2) return;

  this.classList.add('flipped');
  selectedCards.push(this);

  if (selectedCards.length === 2) {
    checkForMatch();
  }
}

function checkForMatch() {
  const [card1, card2] = selectedCards;
  const isMatch = card1.dataset.image === card2.dataset.image;

  if (isMatch) {
    matchedCards.push(card1, card2);
    selectedCards = [];

    const totalPairs = cardsArray.length;
    if (matchedCards.length === totalPairs * 2) {
      setTimeout(() => {
        showModalAndRestart(); // só ela aqui!
      }, 500);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      selectedCards = [];
    }, 1000);
  }
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function initializeGame() {
  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = '';
  selectedCards = [];
  matchedCards = [];

  const shuffledCards = shuffleArray([...cardsArray, ...cardsArray]);

  shuffledCards.forEach(image => {
    const card = createCard(image);
    gameBoard.appendChild(card);
  });
}

function resetGame() {
  initializeGame();
}

document.getElementById('back-button').addEventListener('click', () => {
  window.location.href = 'https://dalylahr.github.io/livro-gigi/';
});

function showModalAndRestart() {
  const modal = document.getElementById('custom-modal');
  modal.style.display = 'flex';

  setTimeout(() => {
    modal.style.display = 'none';
    initializeGame();
  }, 3000);
}

initializeGame();
