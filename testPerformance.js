// Yekaalo Habtemichael
// 320
// Test Suite 2 - Performance

// ---------------------------------------------------------------------------------------------------------------------
/* eslint-env mocha, chai */
/* global chai, maxPrimeSum */

// maxPrimeSum() test cases
describe('Test for Performance', function () {
  describe('maxPrimeSum', function () {
    this.slow(0);
    this.timeout(20);
    it('maxPrimeSum(10000) = [9521, 65]', function () {
      chai.expect(maxPrimeSum(10000)).deep.equal([9521, 65]);
    });
    this.slow(0);
    this.timeout(100);
    it('maxPrimeSum(100000) = [92951, 183]', function () {
      chai.expect(maxPrimeSum(100000)).deep.equal([92951, 183]);
    });
  });
});
