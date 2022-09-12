//preload variables
let roadImage;
let playerImage;
let carImages = [];

let backgroundSound;
let carHit;
let scoreAlert;

function preload(){
  roadImage = loadImage("img/estrada.png");
  playerImage = loadImage("img/ator-1.png");
  carImages[0] = loadImage("img/carro-1.png");
  carImages[1] = loadImage("img/carro-2.png");
  carImages[2] = loadImage("img/carro-3.png");
  carImages[3] = loadImage("img/carro-2.png");
  carImages[4] = loadImage("img/carro-1.png");
  
  backgroundSound = loadSound("sounds/trilha.mp3");
  carHit = loadSound("sounds/colidiu.mp3");
  scoreAlert = loadSound("sounds/pontos.wav");
}