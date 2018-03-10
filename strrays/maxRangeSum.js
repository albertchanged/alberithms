// Input: an array of numbers
// Output: the maximum possible profit from array
// Constraints: none
// Edge Cases: empty array -- return 0
var maxRangeSum = (stocks) => {
  // Initialize maxGain and currentGain
  let maxGain = 0;
  let currentGain = 0;
  // Iterate through stocks 
  for (let i = 0; i < stocks.length; i++) {
    currentGain += stocks[i];
    // Set maxGain to max of maxGain and currentGain
    if (currentGain > maxGain) {
      maxGain = currentGain;
    } else if (currentGain < 0) {
      // If currentGain is negative, reset it to 0 (larger than negative)
      currentGain = 0;
    }
  }
  // Return maxProfit
  return maxGain;
}

console.log(maxRangeSum([7, -3, -10, 4, 2, 8, -2, 4, -5, -6])); // 16