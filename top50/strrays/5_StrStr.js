// Implement strStr(). Return index of first occurrence of needle in haystack, or –1
//  if needle is not part of haystack.

const strStr = (haystack, needle) => {
  // Iterate through haystack
  for (let i = 0; i < haystack.length; i++) {
    // If element is equal to needle
    if (haystack[i] === needle) {
      return i;
    }
  }
  return -1;
}

console.log(strStr(['albert', 3, 'is', 'cool', 8, null, 10], 'cool'))