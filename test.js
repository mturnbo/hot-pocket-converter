var expect = require('chai').expect;
var converter = require('./index');

describe('converter', function() {
  it('should convert 12 ft to 28.799769601843185 hot pockets', function() {
    var result = converter('length', 'ft', 12);
    expect(result).to.equal(28.799769601843185);
  });
  it('should convert 36 kg to 281.25 hot pockets', function() {
    var result = converter('weight', 'kg', 36);
    expect(result).to.equal(281.25);
  });
  it('should convert 1234 s to 10.283333333333333 hot pockets', function() {
    var result = converter('time', 's', 1234);
    expect(result).to.equal(10.283333333333333);
  });
  it('should convert $7.55 s to 3.775 hot pockets', function() {
    var result = converter('currency', 'USD', 7.55);
    expect(result).to.equal(3.775);
  });
  it('should convert 85 degrees celsius s to 1.4166666666666667 hot pockets', function() {
    var result = converter('temperature', 'C', 85);
    expect(result).to.equal(1.4166666666666667);
  });
  it('should convert 400 calories to 1.1111111111111112 hot pockets', function() {
    var result = converter('energy', 'C', 400);
    expect(result).to.equal(1.1111111111111112);
  });
});
