// Input: a string of brackets (only)
// Output: boolean -- if each bracket is balanced
// Constraints: none
// Edge Cases: none

var balancedBrackets = (string) => {
  // Initialize a stack
  let stack = [];
  // Iterate over chars in string
  for (let char of string) {
    // If char equals {
    if (char === '{') {
      // Push } to stack
      stack.push('}');
    } else if (char === '[') {
      // Push ] to stack
      stack.push(']');
    } else if (char === '(') {
      // Push ) to stack
      stack.push(')');
    } else {
      // If stack is empty or char doesn't match stack.pop
      if (stack.length === 0 || char !== stack.pop()) {
        // Return false
        return false;
      }
    }
  }
  // Return whether stack is empty
  return stack.length === 0;
}

console.log(balancedBrackets('[{({[]})}]'));
console.log(balancedBrackets('[{({[})}[]'));