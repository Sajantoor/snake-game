var snake;
var scl = 20;
var food;

function setup() {
  createCanvas(600, 600);
  snake = new snake();
  // I want to bump up the fps to a smooth 60 soon.
  frameRate(20);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51);
  if (snake.eat(food)) {
    snake.total++;
    pickLocation();
  }
  snake.death();
  snake.update();
  snake.show();
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

// Tell's Js what direction to move snake based on keypress.
function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.direction(0, -1) }
 else if (keyCode === DOWN_ARROW) {
    snake.direction(0, 1)  }
  else if (keyCode === RIGHT_ARROW) {
    snake.direction(1, 0)  }
  else if (keyCode === LEFT_ARROW) {
    snake.direction(-1, 0)  }
  else if (keyCode === 87) {
    snake.direction(0, -1) }
  else if (keyCode === 83) {
    snake.direction(0, 1)  }
  else if (keyCode === 83) {
    snake.direction(0, 1)  }
  else if (keyCode === 68) {
    snake.direction(1, 0)  }
  else if (keyCode === 65) {
    snake.direction(-1, 0)  }
}
