var MorphingReboundDancer = function(top, left, timeBetweenSteps) {
  ReboundDancer.call(this, top, left, 0);

  this.borderRad = 0;
  this.borderLeft = 10;
  this.borderRight = 10;
  this.borderBottom = 20;
  this.borderTop = 0;
  this.increaseOrDecrease = 1;
  this.hueIncrease = 1;
  this.hueVal = 0;
};

MorphingReboundDancer.prototype = Object.create(ReboundDancer.prototype);
MorphingReboundDancer.prototype.constructor = MorphingReboundDancer;
// MorphingReboundDancer.prototype.oldStep = MorphingReboundDancer.prototype.step;

MorphingReboundDancer.prototype.step = function () {

  ReboundDancer.prototype.step.call(this);

  var one, two, three, four, five;
  two = Math.floor(Math.random() * 2) + 1;
  three = Math.floor(Math.random() * 2) + 1;
  four = Math.floor(Math.random() * 2) + 0;
  five = Math.floor(Math.random() * 3) + 1;

  if (this.borderBottom > 60 || this.borderBottom < 5) {
    this.increaseOrDecrease *= -1;
  }

  this.borderRad += this.increaseOrDecrease * 1;
  this.borderLeft += this.increaseOrDecrease * two;
  this.borderRight += this.increaseOrDecrease * three;
  this.borderBottom += this.increaseOrDecrease * four;

  this.hueVal += this.hueIncrease;
  if (this.hueVal === 360 || this.hueVal === 0) {
    this.hueIncrease *= -1;
  }

  // var styleSettings = {
  //   'border': this.borderTop + '% ' + this.borderRight + '% ' + this.borderBottom + '% ' + this.borderLeft + '%'
  // };

  //this.$node.css(styleSettings);
  this.$node.css('border-bottom', 'solid ' + this.borderBottom + 'px limegreen');
  this.$node.css('border-right', 'solid ' + this.borderRight + 'px transparent');
  this.$node.css('border-left', 'solid ' + this.borderLeft + 'px transparent');
  this.$node.css('border-radius', this.borderRad + 'px');
  this.$node.css({ 'transform': 'rotate("")'});
  this.angle++;
  this.$node.css({ 'transform': 'rotate(' + (this.angle) + 'deg)' });
  this.$node.css('border-color', 'hsl(' + this.hueVal * Math.floor(Math.random() * 360) + ', 100%, 50%)');
  this.$node.css('background-color', 'hsl(' + this.hueVal + ', 100%, 50%)');

};




var makeMorphingReboundDancer = function(top, left, timeBetweenSteps) {
  return new MorphingReboundDancer(top, left, timeBetweenSteps);
};