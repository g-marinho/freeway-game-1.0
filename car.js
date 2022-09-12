//car variables
let xCars = [500, 501, 499, 500, 501]; //cars x position
let yCars = [40, 100, 180, 260, 320];  //cars y position
let wCar = 50;    //car width
let hCar = 40;    //car height
let carsSpeed = [5, 6, 7, 6, 5];

function createCars() {
  for (i = 0; i < carImages.length; i++) {
  image(carImages[i], xCars[i], yCars[i], wCar, hCar);
  }
}

function carSpeed() {
  for (i = 0; i < xCars.length; i++)
  xCars[i] -= carsSpeed[i];
}

function carLoop(){
  for (i = 0; i < xCars.length; i++)
  if (xCars[i] < -50) {
    xCars[i] = 600;
  }
}