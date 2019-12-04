// Yekaalo Habtemichael
// CS 320
// Version 1 -Orignal

function primeGen(give) {
  const arr = [];
  for (let x = 2; x <= give; x++) {
    arr.push(x);
  }
  for (let y = 0; y <= arr.length; y++) {
    for (let z = 1; z <= arr.length; z++) {
      if (arr[z] % arr[y] === 0 && arr[y] !== arr[z]) {
        arr.splice(z, 1);
        z -= 2;
      }
    }
  }

  console.log('Prime numbers:', arr);
  return (arr);
  // eslint-disable-next-line no-use-before-define
}

// checks if number is prime
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return (true);
}


function maxPrimeSum(threshold) {
  const primes = primeGen(threshold);
  let maxSum = 0;
  let maxRun = 0;

  // Starting from each spot in the primes list, loop through all the primes and find the maxSum (prime) and the maxRun
  // (primes in a row). maxSum and maxRun are potentially updated every loop based on conditions.
  for (let i = 0; i < primes.length; i++) {
    // cumSum is the cumulative sum of primes, want to reset after each iteration
    let cumSum = 0;
    // Starting from spot i, for each spot until the end of the primes list
    for (let j = i; j < primes.length; j++) {
      // Add a cumulative sum of the primes after spot i
      cumSum += primes[j];
      // If the cumulative sum gets to be above the threshold, can't be maxSum, break and start summing from next i
      if (cumSum > threshold) {
        break;
      }
      // If the cumulative sum is prime, can potentially be a new maxSum
      if (isPrime(cumSum) === true) {
        // If the cumulative sum is a number greater then the current maxSum, and if the number of primes added in j
        // minus the cumulative sum starting position i is greater then current maxRun (i.e. new largest maxSum/maxRun)
        if (maxSum < cumSum && maxRun < j - i) {
          // Update new maxRun and maxSum
          maxRun = j - i;
          maxSum = cumSum;
        }
      }
    }
  }
  maxRun++;
  console.log([maxSum, maxRun]);
  return ([maxSum, maxRun]);
}

maxPrimeSum(10000);
