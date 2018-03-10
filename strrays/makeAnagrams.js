// Input: 2 strings
// Output: minimum count of characters to remove from both to make them anagrams
// Constraints: count >= 1
// Edge Cases: cannot form anagrams -- return 0

var makeAnagramsNM = (str1, str2) => {
  // Initialize count to sum of str lengths
  let count = str1.length + str2.length;
  // Split str1 and str2 into arrays
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  // Iterate over str1
  for (let i = 0; i < arr1.length; i++) {
    // Iterate over str2
    for (let j = 0; j < arr2.length; j++) {
      // If elements match,
      if (arr1[i] === arr2[j]) {
        // Remove that element from arr2
        arr2.splice(j, 1);
        // Decrement count by 2
        count -= 2;
        // Break
        break;
      }
    }
  }
  // Return count
  return count;
}

var countChars = (str) => {
  let charObj = {};
  for (let i = 0; i < str.length; i++) {
    if (!charObj[str[i]]) {
      charObj[str[i]] = 1;
    } else {
      charObj[str[i]]++;
    }
  }
  return charObj;
}
var makeAnagramsN = (str1, str2) => {
  // Count chars in each object
  let charObj1 = countChars(str1);
  let charObj2 = countChars(str2);
  // Define total to be sum of lengths
  let total = str1.length + str2.length;
  let difference = 0;
  // Iterate over keys in charObj1
  for (let key in charObj1) {
    // Initialize matches (for counting)
    let matches = 0;
    if (charObj2[key]) {
      // If charObj1's value matches charObj2's value at key
      if (charObj1[key] === charObj2[key]) {
        // Multiply value by 2 because it appears in BOTH charObj's
        matches = 2 * charObj1[key];
      }
      difference += matches;
    }
  }
  // The total number to delete will be 
  // Total length - total SHARED chars
  return total - difference;
}

console.log(makeAnagramsNM('abc', 'cde'));
console.log(makeAnagramsNM('hello', 'billion'));
console.log(makeAnagramsN('abc', 'cde'));
console.log(makeAnagramsN('hello', 'billion'));