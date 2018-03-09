// Given an input string s, reverse the string word by word.
// For example, given s = "the sky is blue", return "blue is sky the".

const reverseWords = (s) => {
  return s.split(' ').reverse().join(' ');
}

console.log(reverseWords('the sky is blue'));