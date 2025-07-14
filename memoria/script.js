
const imagens = [
  'gigi.png',
  'mae.png',
  'leo.png',
  'urubu.png',
  'gigi-mae.png',
  'gigi-urubu.png'
];

let cartas = [...imagens, ...imagens];
cartas.sort(() => 0.5 - Math.random());

const tabuleiro = document.querySelector('.game-board');
let primeiraCarta = null;
let travado = false;

cartas.forEach((nome) => {
  const carta = document.createElement('div');
  carta.classList.add('card');
  carta.dataset.nome = nome;

  const img = document.createElement('img');
  img.src = 'img/' + nome;
  img.alt = nome;

  carta.appendChild(img);
  tabuleiro.appendChild(carta);

  carta.addEventListener('click', () => {
    if (travado || carta.classList.contains('flipped')) return;

    carta.classList.add('flipped');

    if (!primeiraCarta) {
      primeiraCarta = carta;
    } else {
      const segundaCarta = carta;

      if (primeiraCarta.dataset.nome === segundaCarta.dataset.nome) {
        primeiraCarta = null;
      } else {
        travado = true;
        setTimeout(() => {
          primeiraCarta.classList.remove('flipped');
          segundaCarta.classList.remove('flipped');
          primeiraCarta = null;
          travado = false;
        }, 1000);
      }
    }
  });
});
