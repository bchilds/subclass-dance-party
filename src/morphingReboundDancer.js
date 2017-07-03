var MorphingReboundDancer = function(top, left, timeBetweenSteps) {
  reboundDancer.call(this, top, left, timeBetweenSteps);

  this.borderRad = 0;
  this.borderLeft = 10;
  this.borderRight = 10;
  this.borderBottom = 20;
  this.borderTop = 0;
  //this.increaseOrDecrease = 1;
};

MorphingReboundDancer.prototype = Object.create(ReboundDancer.prototype);
MorphingReboundDancer.prototype.constructor = MorphingReboundDancer;
MorphingReboundDancer.prototype.oldStep = MorphingReboundDancer.prototype.step;

MorphingReboundDancer.prototype.step = function () {
  this.oldStep.call(this);

  var one, two, three, four, five;
  one = Math.floor(Math.random() * 8) - 3;
  two = Math.floor(Math.random() * 8) - 3;
  three = Math.floor(Math.random() * 8) - 3;
  four = Math.floor(Math.random() * 8) - 3;
  five = Math.floor(Math.random() * 8) - 3;

  this.borderRad += one;
  this.borderLeft += two;
  this.borderRight += three;
  this.borderBottom += four;
  this.borderTop += five;

  var styleSettings = {
    'border-left': this.borderLeft,
    'border-right': this.borderRight,
    'border-bottom': this.borderBottom,
    'border-top': this.borderTop,
    'border-radius': this.borderRad
  };

  this.$node.css(styleSettings);
};




var makeMorphingReboundDancer = function(top, left, timeBetweenSteps) {
  return new MorphingReboundDancer(top, left, timeBetweenSteps);
};