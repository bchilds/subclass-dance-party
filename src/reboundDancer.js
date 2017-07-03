var ReboundDancer = function(top, left, timeBetweenSteps) {
  //so use window.innerWidth and window.innerHeight for boundaries
  Dancer.call(this, top, left, 0);
  //this.$node = $('<span class="dancer-rebound"></span>');
  this.$node.addClass('dancer-rebound');
  this.$node.removeClass('dancer');

  this.x = left;
  this.y = top;
  this.velX = Math.floor(Math.random() * 8) - 4;
  this.velY = Math.floor(Math.random() * 8) - 4;
  this.angle = 180 * Math.atan(this.velY / this.velX);
  this.$node.css({ 'transform': 'rotate(' + (360 - this.angle) + 'deg)' });
};

ReboundDancer.prototype = Object.create(Dancer.prototype);
ReboundDancer.prototype.constructor = ReboundDancer;
ReboundDancer.prototype.oldStep = ReboundDancer.prototype.step;

ReboundDancer.prototype.step = function() {
  this.oldStep.call(this);
  // change position
  
  if (this.x && this.y) {
    if (this.x < 0 || this.x > $('body').width()) {
      this.velX *= -1;
      this.angle = ( 2 * this.angle + 90 ) % 360;
      this.$node.css({ 'transform': 'rotate("")'});
    }  

    if (this.y <= 0 || this.y >= $('body').height()) {
      this.velY *= -1;
      this.angle = ( 2 * this.angle - 90 ) % 360;
      this.$node.css({ 'transform': 'rotate("")'});
    }    

    this.x += this.velX;
    this.y += this.velY;
    
    var styleSettings = {
      top: this.y,
      left: this.x
    };
    this.$node.css(styleSettings);
    this.$node.css({ 'transform': 'rotate(' + (90 - this.angle) + 'deg)' });
    
  }
};

var makeReboundDancer = function(top, left, timeBetweenSteps) {
  return new ReboundDancer(top, left, timeBetweenSteps);
};