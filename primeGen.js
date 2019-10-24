// Yekaalo Habtemichael
// CS 320


// Return all Prime numbers
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
}

primeGen(10);
