var RepulsiveDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, 0);
  this.$node.addClass('repulsive-dancer');

  this.range = 90;
  this.centerPosition = [left + 10, top + 10];
  this.velocity = [0, 0];
};

RepulsiveDancer.prototype = Object.create(Dancer.prototype);
RepulsiveDancer.prototype.constructor = RepulsiveDancer;

RepulsiveDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  
  if (this.centerPosition) {
    this.$node.css({top: (this.centerPosition[1] - 10 + this.velocity[1]), left: (this.centerPosition[0] - 10 + this.velocity[0]) });
  }
};

var makeRepulsiveDancer = function(top, left, timeBetweenSteps) {
  return new RepulsiveDancer(top, left, timeBetweenSteps);
};