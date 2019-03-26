const assert = require('assert');
const minmax = require('../minmax/minmax.js');

describe('MinMAx value', function () {

  it('Should be loaded', function () {
    assert.equal(true, true);
  });

  it('Should be equal', function () {
    assert.deepEqual([2, 8], minmax([8, 2, 4, 5]));
  });

  it('Should be equal', function () {
    assert.deepEqual([-9, 3], minmax([2, -6, -8, -9, 3]));
  });

  it('Should be equal', function () {
    assert.deepEqual([-210, 912], minmax([-210, 45, 64, 837, -6, 35, 912, -46, 78]));
  });
});