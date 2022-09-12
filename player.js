//player variables
let xPlayer = 85;  //player x position
let yPlayer = 366;  //player y position

let score = 0;
let collision = false;

function createPlayer() {
  image(playerImage, xPlayer, yPlayer, 30, 30); 
}

function playerMovement() {
  if (keyIsDown(UP_ARROW)) {
    yPlayer -= 3;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    yPlayer += 3;
  }
}

function collisionCheck() {
  for (let i = 0; i < carImages.length; i++) {
    collision = collideRectCircle(xCars[i], yCars[i], wCar, hCar, xPlayer +15, yPlayer + 15, 25)
    if (collision) {
      carHit.play()
      playerReborn();
      if (score > 0) {
        score -= 1;
      }
    }
  }
}

function playerReborn() {
  yPlayer = 366;
}

function createScoreBoard() {
  textSize(24);
  textAlign(CENTER);
  fill(204, 0, 0);
  text(score, 300, 25)
}

function scoreCounter() {
  if (yPlayer < 15) {
    score +=1;
    scoreAlert.play();
    playerReborn();
  }
}