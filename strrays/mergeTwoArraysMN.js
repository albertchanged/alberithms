// ---------------------------- PROBLEM ---------------------------- //

// Merge two sorted arrays, with O(M + N) time complexity


// ------------------------- IMPLEMENTATION ------------------------- //

// Input: 2 sorted arrays of any length
// Output: 1 sorted array with all values from input arrays
// Constraints: O(n) time complexity
// Edge Cases: empty arrays -- return empty array
const mergeTwoArraysMN = (arr1, arr2) => {
  // Initialize merged array
  let merged = [];
  // Initialize i, j, k to 0
  let i = 0;
  let j = 0;
  let k = 0;
  // While i and j are in bounds
  while (i < arr1.length && j < arr2.length) {
    // Fill merged by setting elements at k
    // equal to smallest of elements at i and j
    merged[k++] = (arr1[i] < arr2[j]) ? arr1[i++] : arr2[j++];
  }
  // While arr1 has remaining values
  while (i < arr1.length) {
    // Set elements at k equal to those values
    merged[k++] = arr1[i++];
  }
  // While arr2 has remaining values
  while (j < arr2.length) {
    // Set elements at k equal to those values
    merged[k++] = arr2[j++];
  }
  // Return merged
  return merged;
}


// ------------------------------ PERFORMANCE ------------------------------ //

// O(M + N) time complexity and O(M + N) space complexity 
// where M = arr1's length and N = arr2's length


// ------------------------------ TEST CASES ------------------------------ //

console.log(mergeTwoArraysMN([1, 2, 3, 7], [2, 4, 5, 6])); // [ 1, 2, 2, 3, 4, 5, 6, 7 ]
console.log(mergeTwoArraysMN([1, 2, 3, 7], [4, 5, 6])); // [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(mergeTwoArraysMN([-1, 2, 3, 7], [4, 5, 6])); // [ -1, 2, 3, 4, 5, 6, 7 ]
console.log(mergeTwoArraysMN([-1], [2, 4])); // [ -1, 2, 4 ]
console.log(mergeTwoArraysMN([], [])); // []