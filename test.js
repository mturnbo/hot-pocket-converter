var expect = require('chai').expect;
var converter = require('./index');

describe('hot pocket converter', function() {
  it('should convert 12 ft to 28.7998 hot pockets', function() {
    var result = converter('length', 'ft', 12);
    expect(result).to.equal(28.7998);
  });
  it('should convert 36 kg to 281.2500 hot pockets', function() {
    var result = converter('weight', 'kg', 36);
    expect(result).to.equal(281.2500);
  });
  it('should convert 1234 s to 10.2833 hot pockets', function() {
    var result = converter('time', 's', 1234);
    expect(result).to.equal(10.2833);
  });
  it('should convert $7.55 s to 3.7750 hot pockets', function() {
    var result = converter('currency', 'USD', 7.55);
    expect(result).to.equal(3.7750);
  });
  it('should convert 85 degrees celsius s to 1.4167 hot pockets', function() {
    var result = converter('temperature', 'C', 85);
    expect(result).to.equal(1.4167);
  });
  it('should convert 400 calories to 1.1111 hot pockets', function() {
    var result = converter('energy', 'C', 400);
    expect(result).to.equal(1.1111);
  });
});
