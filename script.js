<script src="jquery.min.js"></script>
<script src="turn.min.js"></script>

<script>
  function ajustarFlipbook() {
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;
    const margem = 20;

    const larguraOriginal = 1155;
    const alturaOriginal = 768;
    const proporcao = larguraOriginal / alturaOriginal;

    let novaLargura = larguraTela - margem * 2;
    let novaAltura = novaLargura / proporcao;

    // Se ainda estiver muito alto, ajusta pela altura
    if (novaAltura > alturaTela - 180) {
      novaAltura = alturaTela - 180;
      novaLargura = novaAltura * proporcao;
    }

    // Aplica tamanho no flipbook
    $('.flipbook').turn('size', novaLargura, novaAltura);
    $('.flipbook').css({ width: novaLargura + 'px', height: novaAltura + 'px' });
    $('.book-outer').css({ width: novaLargura + 'px', height: novaAltura + 'px' });
  }

  $(document).ready(function () {
    $('.flipbook').turn({
      width: 1155,
      height: 768,
      autoCenter: true,
      display: 'single'
    });

    ajustarFlipbook();
    $(window).on('resize orientationchange', ajustarFlipbook);
  });
</script>
