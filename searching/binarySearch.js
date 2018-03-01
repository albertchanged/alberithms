// HOW IT WORKS
// 1. Define middle in array
// 2. Check which side the target belongs to
// 3. Narrow search to that particular side
// 4. Define middle in that side
// 5. Repeat until we find value

var binarySearchRecursive = (array, target) => {
  // Initialize middle
  let middle = Math.floor(array.length / 2);
  // If we find target right away, return true
  if (target === array[middle]) {
    return true;
  } else if (target < array[middle]) {
    // Otherwise search left side if target is less
    return binarySearchRecursive(array.slice(0, middle), target);
  } else {
    // Otherwise search right side if target is more
    return binarySearchRecursive(array.slice(middle + 1), target);
  }
};

var binarySearchIterative = (array, target) => {
  // Initialize left and right
  let left = 0;
  let right = array.length - 1;
  // let middle = (left + right) >> 1;
  let middle = Math.floor((left + right) / 2);
  // Iterate from left to right, while we haven't found target
  while (target !== array[middle] && left < right) {
    if (target < array[middle]) {
      // Narrow to left side if target is less
      right = middle - 1;
    } else {
      // Narrow to right side of target is more
      left = middle + 1;
    }
    // Calculate middle again
    middle = Math.floor((left + right) / 2);
  }
  return target === array[middle];
};

console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 3));
console.log(binarySearchIterative([1, 2, 3, 4, 5, 6, 7], 4));