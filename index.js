function hasTargetSum(array, target) {
  let combinations = [];
  
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      combinations.push(array[i] + array[j]);
    }
  }
  //console.log(combinations);
if (combinations.includes(target)) {
  return true;
} else {
  return false;
}
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  the function creates a new empty array then
 for loop to iterate each element find and push any possible 
 sum combination to new array then if else statement to compare
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
