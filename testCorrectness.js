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
  /* eslint-env mocha, chai */
  // eslint-disable-next-line no-redeclare
  /* global chai, cumulativeSum */

  // cumulativeSum() test cases
  describe('cumulativeSum', function () {
    it('cumulativeSum([1, 2, 3, 4]) = [1, 3, 6, 10]', function () {
      chai.expect(cumulativeSum([1, 2, 3, 4])).deep.equal([1, 3, 6, 10]);
    });
    it('cumulativeSum([10, 11, 12, 13, 14]) = [10, 21, 33, 46, 60]', function () {
      chai.expect(cumulativeSum([10, 11, 12, 13, 14])).deep.equal([10, 21, 33, 46, 60]);
    });
  });
});
