describe('reboundDancer', function() {

  var reboundDancer, clock;

  beforeEach(function() {  
    var timeBetweenSteps = 100;

    clock = sinon.useFakeTimers();
    reboundDancer = new ReboundDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(reboundDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should always move horizontally', function() {
    var x = reboundDancer.x;
    reboundDancer.step();
    expect(reboundDancer.x).to.not.equal(x);
  });

  it('should always move vertically', function() {
    var y = reboundDancer.y;
    reboundDancer.step();
    expect(reboundDancer.y).to.not.equal(y);
  });

  describe('dance', function() {
    xit('should call step at least once per second', function() {
      sinon.spy(reboundDancer, 'step');
      expect(reboundDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(reboundDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(reboundDancer.step.callCount).to.be.equal(2);
    });
  });
});
