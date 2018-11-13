
const { MySet } = require('./Set');
const chai = require('chai');
const { expect } = chai;

context('Test Set.js', function() {
  it('returns correct values when adding duplicated values', function() {
    const set = new MySet();
    set.add(1);
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.toString()).to.be.equal('1,2,3');
  });

  it('returns correct values when removing values', function() {
    const set = new MySet();
    set.add(2);
    set.add(3);
    set.add(4);
    set.remove(1);
    set.remove(2);

    expect(set.toString()).to.be.equal('3,4');
  });

  it('returns true when call exist on an existed value', function() {
    const set = new MySet();
    set.add(2);
    set.add(3);
    set.add(4);

    expect(set.exist(3)).to.be.equal(true);
  });
});
