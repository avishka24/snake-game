var NUM_INITIAL_SECTIONS = 3;
// Directions
var UP = 0;
var UP_KEY_CODE = 38;
var DOWN = 1;
var DOWN_KEY_CODE = 40;
var LEFT = 2;
var LEFT_KEY_CODE = 37;
var RIGHT = 3;
var RIGHT_KEY_CODE = 39;

function Snake() {
  this.img = document.createElement('img');
  this.img.src = 'images/snake2.png';
  this.sections = [];
}

Snake.prototype = new SnakeWorldObject();

Snake.prototype.setupSnake = function(maxX, maxY) {
  // Set snake's starting coordinates

  let startingpositionY = Math.round(maxY / 2);
  let startingpositionX = Math.round(maxX / 2);
  this.setY(startingpositionY);
  this.setX(startingpositionX);

  // create initial number of snake sections (snake length)
  
  for(let j = 0; j < NUM_INITIAL_SECTIONS; j++){
      let ycord = startingpositionY + j + 1;
      this.sections.unshift(new SnakeSection(startingpositionX, ycord))
  }

};  
Snake.prototype.hasCollided = function(maxX, maxY) {
  // Check if snake has collided with itself or board boundaries.
  if(this.getX() < 0 || this.getY() < 0 || this.getY() >= maxY || this.getX() >= maxX ){
      return true;
  }

  for(var i = 0; i < this.sections.length; i++){
      if(this.isSameLocation(this.sections[i]))
      return true;
  }
  return false;
};

Snake.prototype.endMove = function(didGrow) {
  if (!didGrow) {
    this.sections.shift();
  }
};

Snake.prototype.startMove = function() {
  this.direction = this.nextDirection;
  // Move snake here
  var ycord = this.getY();
  var xcord = this.getX();

  if(this.direction === UP)
    this.setY(ycord - 1);
  else if(this.direction === DOWN)
    this.setY(ycord + 1);
  else if(this.direction === LEFT)
    this.setX(xcord - 1);
  else if(this.direction === RIGHT)
    this.setX(xcord + 1);

  this.sections.push(new SnakeSection(xcord, ycord));
  };

Snake.prototype.draw = function(context, spacing) {
  // Draw the complete snake
  for(var i = 0; i < this.sections.length; i++){
      this.sections[i].draw(context, spacing); 
  }
  DrawUtil.drawImage(context, this.img, spacing * this.getX(), spacing * this.getY(), spacing, spacing)
};

Snake.prototype.init = function(maxX, maxY) {
  this.setupListeners();
  this.setupSnake(maxX, maxY);
};

Snake.prototype.setupListeners = function() {
  this.direction = UP;
  this.nextDirection = UP;
  var s = this;
  document.addEventListener('keydown', function(e) {
    // Set s's nextDirection based on keypress.
    if(e.key === "ArrowUp" && s.direction !== DOWN)
        s.nextDirection = UP;
    else if(e.key === "ArrowDown" && s.direction !== UP)
        s.nextDirection = DOWN;
    else if(e.key === "ArrowLeft" && s.direction !== RIGHT)
        s.nextDirection = LEFT;
    else if(e.key === "ArrowRight" && s.direction !== LEFT)
        s.nextDirection = RIGHT;
    else return 
    e.preventDefault();
  });
};
