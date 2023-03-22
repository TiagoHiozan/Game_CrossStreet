function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
  somDaTrilha.setVolume(0.15)
  
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}