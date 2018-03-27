// Question: Given an array of numbers and a sliding window size, how to 
// get the maximal numbers in all sliding windows?

// For example, if the input array is {2, 3, 4, 2, 6, 2, 5, 1} and the size 
// of sliding windows is 3, the output of maximums are {4, 4, 6, 6, 6, 5}, as illustrated in Table1.

const maxInSlidingWindow = (array, windowSize) => {
  // Initialize max
  let max = 0;
  // Iterate through array from i = 0
  for (let i = 0; i <= array.length - windowSize; i++) {
    // Set max as array[i]
    max = array[i];
    // Iterate through array from j = 1 to windowSize
    for (let j = 1; j < windowSize; j++) {
      // If array[i + j] > max
      if (array[i + j] > max) {
        // Set max to array[i + j]
        max = array[i + j];
      }
    }
    console.log(max);
  }
}

maxInSlidingWindow([2, 3, 4, 2, 6, 2, 5, 1], 3);