let yAtor = 366;
let xAtor = 100;
let colisao = false
let pontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor , yAtor , 30 , 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 2;
    }
  }
}
function verificaColisao(){
  for (let i = 0; i< imagemCarros.length; i = i+1){
  colisao = collideRectRect(xCarros[i],yCarros[i],tamanhoxCarro ,tamanhoyCarro,xAtor,yAtor, 10 ,30);
    if (colisao){
      colidiu();
      somColisao.play();
      if(checkPoints()){
        pontos -= 1;
      }
    }
  }
}
function colidiu(){
  yAtor = 366;
}
function pontuacao(){
  fill(color(255,255,0));
  textSize(20);
  text(pontos, 240, 25);
}
function marcaPontos(){
  if(yAtor < 15){
    pontos+=1;
    colidiu();
    somPonto.play();
  }
} 
function checkPoints(){
 return pontos > 0
}
function podeSeMover(){
 return yAtor < 367;
}