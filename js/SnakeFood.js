function SnakeFood() {
	this.img = document.createElement('img');
	this.img.src = 'images/food1.png';
  }
  SnakeFood.prototype = new SnakeWorldObject();
  
  SnakeFood.prototype.randomizePosition = function(maxX, maxY) {
	// Set snake food at random positions.
	this.setY(Math.floor(Math.random() * maxY));
	this.setX(Math.floor(Math.random() * maxX));
  };
  
  SnakeFood.prototype.draw = function(context, spacing) {
	DrawUtil.drawImage(
	  context,
	  this.img,
	  spacing * this.getX(),
	  spacing * this.getY(),
	  spacing,
	  spacing
	);
  };
  