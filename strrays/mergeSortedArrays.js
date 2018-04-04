// Merge 2 sorted arrays into 1 sorted array

// Input: 2 sorted arrays
// Output: 1 sorted array
// Constraints: none
// Edge Cases: none

// Linearithmic
var mergeSortedArraysLinearithmic = (array1, array2) => {
  let merged = array1.concat(array2);
  return merged.sort();
};

// Linear
var mergeSortedArrays = (array1, array2) => {
  // Initialize merged array
  let merged = [];
  // Store current index of array1
  let array1Index = 0;
  // Store current index of array2
  let array2Index = 0;
  // Store current index of merged
  let mergedIndex = 0;
  // Iterate while merged's index is less than total length (keep in bounds)
  while (mergedIndex < (array1.length + array2.length)) {
    // Store whether or not array1's index is out of bounds
    let array1Done = array1Index >= array1.length;
    // Store whether or not array2's index is out of bounds
    let array2Done = array2Index >= array2.length;
    // If array1 still has elements to add AND
    // If array2 still has elements to add
    // OR
    // If array1's current element is less than that of array2
    if (!array1Done && (array2Done || (array1[array1Index]) < array2[array2Index])) {
      // Insert array1's value into merged at merged's index
      merged[mergedIndex] = array1[array1Index];
      // Increment array1's index
      array1Index++;
    } else {
      // Insert array2's value into merged at merged's index
      merged[mergedIndex] = array2[array2Index];
      // Increment array2's index
      array2Index++;
    }
    // Increment merged's index
    mergedIndex++;
  }
  // Return merged
  return merged;
};


console.log(mergeSortedArraysLinearithmic([1, 2, 5, 6, 7], [3, 4, 8, 9]));
console.log(mergeSortedArrays([1, 2, 5, 6, 7], [3, 4, 8, 9]));