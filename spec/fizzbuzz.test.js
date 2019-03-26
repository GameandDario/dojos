const assert = require('assert');
const fizzBuzz = require('../fizzbuzz/fizzbuzz.js');

describe('FizzBuzz value', function () {

  it('Should be loaded', function () {
    assert.equal(true, true);
  });

  it('Should return fizz', function () {
    assert.equal('fizz', fizzBuzz(3));
  });

  it('Should return fizz', function () {
    assert.equal('fizz', fizzBuzz(6));
    assert.equal('fizz', fizzBuzz(18));
  });

  it('Should return buzz', function () {
    assert.equal('buzz', fizzBuzz(5));
  });

  it('Should return buzz', function () {
    assert.equal('buzz', fizzBuzz(10));
    assert.equal('buzz', fizzBuzz(25));
  });

  it('Should return fizzbuzz', function () {
    assert.equal('fizzbuzz', fizzBuzz(15));
  });

  it('Should return fizzbuzz', function () {
    assert.equal('fizzbuzz', fizzBuzz(30));
    assert.equal('fizzbuzz', fizzBuzz(150));
  });

  it('Should return 2', function () {
    assert.equal('2', fizzBuzz(2));
  });

  it('Should return 8 and 52', function () {
    assert.equal('8', fizzBuzz(8));
    assert.equal('52', fizzBuzz(52));
  });
});