let tamanhoxCarro = 50;
let tamanhoyCarro = 30;
let xCarros = [600, 700, 800, 900 ,600 ,750];
let yCarros = [45 , 100 ,155, 210 ,270 ,318];
let velocidadeCarros = [2, 3.5, 5.6, 5, 4, 2];
function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], tamanhoxCarro , tamanhoyCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (xCarros[i] < passouTodaATela(xCarros[i])){
     xCarros[i] = 600;
    }
  }
}
function passouTodaATela(xCarro){
 return xCarro = -40;
}
