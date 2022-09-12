function setup() {
  createCanvas(600, 400);
  backgroundSound.loop();
}

function draw() {
  background(roadImage);
  createPlayer();
  createCars();
  carSpeed();
  playerMovement();
  carLoop();
  collisionCheck();
  createScoreBoard();
  scoreCounter();
}

