// You have an array of words collected in a dictionary's general order,
// UNTIL the words suddenly start from earlier in the dictionary
// Find rotation point in array, that is, 
// the index where the words start from earlier letters

// Inputs: an array of words
// Outputs: the index of word rotation
// Constraints: none
// Edge Cases: no rotation
var findRotation = (words) => {
  // Initialize low and high
  let low = 0;
  let high = words.length - 1;
  // Iterate while low <= high
  while (low < high) {
    // Define mid
    let mid = Math.floor(low + ((high - low) / 2));
    // If word at mid is alphabetically later than word at mid - 1
    if (words[mid] > words[mid - 1]) {
      // Set low to mid to search right
      low = mid;
    } else {
      // Set high to mid to search left
      high = mid;
    }
    // If low + 1 is equal to high
    if (low + 1 === high) {
      // We found rotation point! Break
      break;
    }
  }
  // Return high
  return high;
};

console.log(findRotation(['albert', 'buys', 'candy', 'for', 'girls', 'but', 'cannot']));
// I don't do that, but hey that letter scheme worked! :) Cannot what??