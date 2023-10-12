let rows = 20;
let cols = 20;
let grid = [];
let illuminatedCircle = null;
let bounceOpacity = 0;
let increasingOpacity = true;
let brightYellowTimeout = 0;
let orangeTimeout = 0;

function setup() {
  createCanvas(400, 400);
  let circleSize = width / cols;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * circleSize;
      let y = i * circleSize;
      grid.push(new Circle(x, y, circleSize));
    }
  }

  setInterval(updateIlluminatedCircle, 1000);
  setInterval(updateOpacity, 20); // Update opacity every 20 milliseconds
  setInterval(updateOrangeCircle, 60000); // Change a random circle to orange every 1 minute
}

function draw() {
  background(0);

  for (let i = 0; i < grid.length; i++) {
    grid[i].display();
  }
}

function updateIlluminatedCircle() {
  if (illuminatedCircle) {
    illuminatedCircle.isBrightYellow = false;
  }

  let index = floor(random(grid.length));
  illuminatedCircle = grid[index];
  illuminatedCircle.isBrightYellow = true;
  brightYellowTimeout = millis() + 2000; // Turn off bright yellow after 2 seconds
}

function updateOpacity() {
  if (increasingOpacity) {
    bounceOpacity += 1;
  } else {
    bounceOpacity -= 1;
  }

  if (bounceOpacity >= 100 || bounceOpacity <= 0) {
    increasingOpacity = !increasingOpacity;
  }

  // Turn off bright yellow after 2 seconds
  if (millis() > brightYellowTimeout) {
    illuminatedCircle.isBrightYellow = false;
  }
}

function updateOrangeCircle() {
  if (millis() > orangeTimeout) {
    if (illuminatedCircle) {
      illuminatedCircle.isOrange = false;
    }

    let index = floor(random(grid.length));
    illuminatedCircle = grid[index];
    illuminatedCircle.isOrange = true;
    orangeTimeout = millis() + 60000; // Change a random circle to orange every 1 minute
  }
}

class Circle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.isNeonPink = false;
    this.isBrightYellow = false;
    this.isOrange = false;
  }

  display() {
    noStroke();
    if (this.isNeonPink) {
      let neonColor = color(255, 255, 255, 255);
      fill(neonColor);
    } else if (this.isBrightYellow) {
      let brightYellowColor = color(255, 255, 0, bounceOpacity * 2.55); // Convert 0-100 to 0-255
      fill(brightYellowColor);
    } else if (this.isOrange) {
      fill('#ffA500'); // Orange
    } else {
      fill('#ff69b4'); // Pink
    }
    ellipse(this.x + this.size / 2, this.y + this.size / 2, this.size);
  }
}
