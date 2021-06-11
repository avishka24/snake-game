/* Base class for objects in Snake World */

function SnakeWorldObject() {}

SnakeWorldObject.prototype.getX = function() {
  // return x coordinate
  return this.newX;
};
SnakeWorldObject.prototype.getY = function() {
  // return y coordinate
  return this.newY;
};
SnakeWorldObject.prototype.setX = function(newX) {
  // set current object's x coordinate
  this.newX = newX;
};
SnakeWorldObject.prototype.setY = function(newY) {
  // set current object's y coordinate
  this.newY = newY;
};

// Requires another SnakeWorldObject
SnakeWorldObject.prototype.isSameLocation = function(snakeWorld) {
  // check if passed object is at the same location as current object.
  if(this.getX() === snakeWorld.getX() && this.getY() === snakeWorld.getY())
  return true;
  return false;
};