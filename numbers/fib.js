// FIBONACCI

// Exponential :(
var fibExp = (n) => {
  if (n < 2) {
    return n;
  }
  return fibExp(n - 1) + fibExp(n - 2);
};

console.log(fibExp(10));


// Linear
function Fib() {
  this.memo = {};
}
// Memoized with Recursion --- O(n) time and O(n) space
Fib.prototype.fibRecur = function(n) {
  if (n < 2) {
    return n;
  }
  // During recursion, check for n's calculated value
  if (this.memo[n]) {
    // If it exists, return it so we don't calculate it again
    return this.memo[n];
  }
  let result = this.fibRecur(n - 1) + this.fibRecur(n - 2);
  // Store last calculated result in memo
  this.memo[n] = result;
  // Return result
  return result;
};
// 'Memoized' with Iteration --- O(n) time and O(1) space
Fib.prototype.fibIter = function(n) {
  if (n < 2) {
    return n;
  }
  // Initialize prev2, which is element that's 2 elements before, to 0
  let prev2 = 0;
  // Initialize prev1, which is element that's 1 element before, to 1
  let prev1 = 1;
  // Define current
  let current;
  // Iterate from 1
  for (let i = 1; i < n; i++) {
    // Keep track of current, which is sum of prev2 and prev1
    current = prev2 + prev1;
    // Set element that's two elements before current to prev1
    prev2 = prev1;
    // Set element that's one element before current to current
    prev1 = current;
  }
  // Return current
  return current;
};

let fibo = new Fib();
console.log(fibo.fibRecur(10));
console.log(fibo.fibIter(10));


