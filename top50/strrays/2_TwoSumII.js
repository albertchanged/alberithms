// TwoSum but the array is already sorted in ascending order

// O(N log N) time, O(1) space
const twoSumIINLogN = (numbers, target) => {
  // Iterate through numbers
  for (let i = 0; i < numbers.length; i++) {
    // BinarySearch -- If complement of number is in numbers
    let index = binarySearch(numbers, target - numbers[i], i + 1);
    if (index !== -1) {
      return [i, index];
    }
  }
  return [];
}

const binarySearch = (array, comp, index) => {
  // Initialize left and right
  let left = 0;
  let right = array.length - 1;
  // Iterate from left to right
  while (left < right) {
    // Calculate mid
    let mid = left + Math.floor((right - left) / 2);
    // If comp is mid value
    if (comp === array[mid]) {
      // Return mid
      return mid;
    } else if (comp < array[mid]) {
      // Set right to mid - 1
      right = mid - 1;
    } else {
      // Set left to mid + 1
      left = mid + 1;
    }
  }
  // Return -1
  return -1;
}

// O(N) time, O(1) space
const twoSumIIN = (array, target) => {
  // Initialize left and right
  let left = 0;
  let right = array.length - 1;
  // Iterate from left to right
  while (left < right) {
    // Calculate currentSum as sum of values at left and right
    let currentSum = array[left] + array[right];
    // If target equals currentSum
    if (currentSum === target) {
      // Return i and j
      return [left, right];
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

console.log(twoSumIINLogN([1, 2, 3, 6, 8, 11,], 14));
console.log(twoSumIIN([1, 2, 3, 6, 8, 11,], 14));