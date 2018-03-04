// Inputs: 2 strings of words: 1 of magazine and 1 of note
// Outputs: boolean -- whether note can be created with magazine's words
// Constraints: case-sensitive and both need to have words
// Edge Cases: none

var countWords= (arr) => {
  let wordObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!wordObj[arr[i]]) {
      wordObj[arr[i]] = 1;
    } else {
      wordObj[arr[i]]++;
    }
  }
  return wordObj;
}
var ransomNote = (magazine, note) => {
  let canMake = false;
  // Split both into 2 arrays of words
  let magArr = magazine.split(' ');
  let noteArr = note.split(' ');
  // Create hash tables for both, counting words
  let magObj = countWords(magArr);
  let noteObj = countWords(noteArr);
  // Iterate over noteObj
  for (let key in noteObj) {
    // If magazine doesn't have note's word
    if (!magObj[key]) {
      // Return false
      return false;
    } else {
      // Otherwise check if their word counts are the same
      if (magObj[key] === noteObj[key]) {
        // If so, set canMake to true
        canMake = true;
      }
    }
  }
  // Return canMake
  return canMake;
};

console.log(ransomNote('Hey will you pay a sum of $200 for my interview prep course', 'of course you will pay'));