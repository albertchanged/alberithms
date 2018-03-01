// HOW IT WORKS
// 1. Split array into halves each time
// 2. Recursively sort each half and merge them

// Inputs: left subarray and right subarray
// Outputs: sorted subarrays concatenated into one array
// Constraints: none
// Edge Cases: none
var merge = (left, right) => {
  // Initialize result array
  let result = [];
  // Initialize left index
  let leftIndex = 0;
  // Initialize right index
  let rightIndex = 0;
  // Iterate over both left and right
  while (leftIndex <= left.length - 1 && rightIndex <= right.length - 1) {
    // If element in either one is smaller, push to result
    // Increment respective index
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // There should be at least 1 leftover (biggest) element in both left and right
  // Return result concatenated with left and right
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

// Inputs: an unsorted array
// Outputs: a sorted array
// Constraints: none
// Edge Cases: an array is length 1 (return array)
var mergeSort = (array) => {
  // If length is 1, return array
  if (array.length === 1) { return array; }
  // Initialize middle
  const middle = Math.floor(array.length / 2);
  // Initialize left array
  const left = array.slice(0, middle);
  // Initialize right array
  const right = array.slice(middle);
  // Return merge, having passed in mergeSorted left and right
  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([1, 5, 4, 2, 3]));




// ------------------- TRANSPILED FROM GAYLE LAAKMANN MCDOWELL'S JAVA SOLUTION -------------------

// Inputs: array, left most index of array, middle index of array, right most index of array
// Outputs: none
// Constraints: none
// Edge Cases: none
var mergeCTCI = (array, temp, leftStart, rightEnd) => {
  let leftEnd = Math.floor((leftStart + rightEnd) / 2);
  let rightStart = leftEnd + 1;
  let left = leftStart;
  let right = rightStart;
  let index = leftStart;

  while (left <= leftEnd && right <= rightEnd) {
    if (array[left] <= array[right]) {
      temp[index] = array[left];
      left++;
    } else {
      temp[index] = array[right];
      right++;
    }
    index++;
  }
  return temp;
};

// Inputs: array, left most index of array, right most index of array
// Outputs: none
// Constraints: none
// Edge Cases: none
var mergeSortCTCI = (array, left, right) => {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    let leftArr = mergeSortCTCI(array, left, mid);
    let rightArr = mergeSortCTCI(array, mid + 1, right);
    return mergeCTCI(array, array.slice(), left, right);
  }
};

let array = [1, 5, 4, 2, 3];
console.log(mergeSortCTCI(array, 0, array.length - 1));


