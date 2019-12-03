// Yekaalo Habtemichael
// 320
// Test Suite 1 - Correctness

/* eslint-env mocha, chai */
/* global chai, primeGen */

// primeGen() test cases
describe('Test for Correctness', function () {
  describe('primeGen', function () {
    it('primeGen(10) = [2, 3, 5, 7]', function () {
      chai.expect(primeGen(10)).deep.equal([2, 3, 5, 7]);
    });
    it('primeGen(20) = [2, 3, 5, 7, 11, 13, 17, 19]', function () {
      chai.expect(primeGen(20)).deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
    });
  });
});
