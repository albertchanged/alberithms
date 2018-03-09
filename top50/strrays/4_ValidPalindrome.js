// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// For example,
// "A man, a plan, a canal: Panama" is a palindrome. "race a car" is not a palindrome.
// For the purpose of this problem, we define empty string as valid palindrome.

const isValidPalindromeNSpace = (string) => {
  return string === string.split('').reverse().join('');
}

const isValidPalindrome1Space = (string) => {
  // Initialize left and right
  let left = 0;
  let right = string.length - 1;
  // Iterate from left to right
  while (left < right) {
    // If char at left is equal to char at right
    if (string[left] === string[right]) {
      return true;
    }
    left++;
    right--;
  }
  // Return false
  return false;
}

console.log(isValidPalindromeNSpace('ilovecoding'));
console.log(isValidPalindromeNSpace('racecar'));

console.log(isValidPalindrome1Space('ilovecoding'));
console.log(isValidPalindrome1Space('racecar'));