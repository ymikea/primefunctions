// Yekaalo Habtemichael
// CS 320
// Version 2 -Optimized

// Original version seems to have over 5000ms time and i optimized it
// using sieve Of Eratosthenes algorithm made it very faster

function primeGenSoE(give) {
  const primeStatus = Array(give).fill(true);
  const arr = [];

  for (let x = 2; (x * x) < primeStatus.length; x++) {
    const status = primeStatus[x];

    if (status) {
      for (let y = (x * 2); y < primeStatus.length; y += x) {
        primeStatus[y] = false;
      }
    }
  }

  for (let x = 2; x < primeStatus.length; x++) {
    if (primeStatus[x] === true) {
      arr.push(x);
    }
  }
  console.log('Prime numbers:', arr);
  return arr;
}
primeGenSoE(10);


function maxPrimeSum(threshold) {
  let maxSum = 0;
  let maxRun = 0;
  const primes = primeGenSoE(threshold);
  const cumSum = [];

  // cumSum is the cumulative sum of primes, want to reset after each iteration
  // Starting from spot i, for each spot until the end of the primes list
  cumSum[0] = 0;
  for (let i = 0; i < primes.length; i++) {
    // Add a cumulative sum of the primes after spot i
    cumSum[i + 1] = cumSum[i] + primes[i];
  }

  for (let i = maxRun; i < cumSum.length; i++) {
    for (let j = i - (maxRun + 1); j >= 0; j--) {
      // If the cumulative sum gets to be above the threshold, can't be maxSum, break and start summing from next i
      if (cumSum[i] - cumSum[j] > threshold) break;
      // If the cumulative sum is prime, can potentially be a new maxSum
      if (primes.indexOf(cumSum[i] - cumSum[j]) >= 0) {
        // Update new maxRun and maxSum
        maxRun = i - j;
        maxSum = cumSum[i] - cumSum[j];
      }
    }
  }
  console.log([maxSum, maxRun]);
  return [maxSum, maxRun];
}

maxPrimeSum(10000);
maxPrimeSum(100000);
