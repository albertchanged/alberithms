// Given a collection of intervals, merge all overlapping intervals.

// For example,
// Given [1,3],[2,6],[8,10],[15,18],
// return [1,6],[8,10],[15,18].

const mergeIntervals = (intervals) => {
  // Initialize merged array
  let merged = [];
  // Sort intervals by their first element
  intervals.sort((a, b) => a[0] - b[0]);
  // Push first interval into merged
  merged.push(intervals[0]);
  // Iterate through intervals from 1
  for (let i = 1; i < intervals.length; i++) {
    // If this interval's 1st element >= 2nd element of merged's last interval
    if (intervals[i][0] <= merged[merged.length - 1][1]) {
      // Set last interval's 2nd element to this one's
      merged[merged.length - 1][1] = intervals[i][1];
    } else {
      // Push interval into merged
      merged.push(intervals[i]);
    }
  }
  // Return merged
  return merged;
}

console.log(mergeIntervals([[1,3],[2,6],[15,18],[8,10]]));