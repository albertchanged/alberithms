// Given an array of integers, find two numbers such that they add up to a specific target number.
// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution.

// Input: an array of integers and a target number
// Output: an array of 2 indices whose values add to target
// Constraints: none
// Edge Cases: none exist -- return empty array
const twoSum = (numbers, target) => {
  // Initialize hash table to count each num
  let numObj = {};
  // Iterate through numbers
  for (let i = 0; i < numbers.length; i++) {
    // Calculate complement of number
    let complement = target - numbers[i];
    // Check if that complement exists in hash
    if (numObj[complement]) {
      // If so, return array with the key at which the complement is stored
      return [i, numObj[complement]];
    }
    // Store index in hash table, using its value as a key
    numObj[numbers[i]] = i;
  }
}

console.log(twoSum([1, 5, 3, 6, 4], 7));