let xAtor = 110;
let yAtor = 366;
let colisao = false
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 29)
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){yAtor -= 2.2;}
  if (keyIsDown(DOWN_ARROW)){
    if(limiteDeBaixo()){yAtor += 1.2;}}
  if (keyIsDown(LEFT_ARROW)){
    if(limiteEsquerdo()){xAtor -= 1.2;}}
  if (keyIsDown(RIGHT_ARROW)){
    if(limiteDireito()){xAtor += 1.2;}
}
}
function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
   colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao) {voltaAtorParaPosicaoInicial(); somDaColisao.play(); somDaVaca.play();
                  if (pontosMaiorQueZero()){
                  meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 365;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25)
  fill(255,69,0)
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 10){
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
    somDoPonto.play();
  }
}

function pontosMaiorQueZero(){
 return meusPontos > 0
}

function limiteDeBaixo(){
  return yAtor < 366;
}

function limiteEsquerdo(){
  return xAtor > 0;
}
  
function limiteDireito(){
  return xAtor < 570;}

