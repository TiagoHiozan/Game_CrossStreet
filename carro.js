let xCarros = [600, 600, 600, 600, 600, 600, 900, 900];
let yCarros = [41, 96, 148, 210, 262, 317, 41, 317];
let velocidadeCarros = [4, 5, 3, 4, 2.8, 2, 4, 2];
let comprimentoCarro = 60;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
  } 
} 

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  if (passouTodaATela(xCarros[i])) {xCarros[i] = 600;}
  } 
}

function passouTodaATela(xCarros){
  return xCarros < - 90;
}









