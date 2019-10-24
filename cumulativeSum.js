// Yekaalo Habtemichael
// CS 320

// Return a cumulative sum of the numbers
function cumulativeSum(numArray) {
  const addList = [];
  let addedCounter = 0;
  for (let i = 0; i < numArray.length; i++) {
    addedCounter += numArray[i];
    addList.push(addedCounter);
  }
  console.log('cumulativeSum numbers:', addList);
  return (addList);
}


cumulativeSum([1, 2, 3, 4]);
