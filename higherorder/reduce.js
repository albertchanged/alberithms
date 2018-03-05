// Input: a function
// Output: a final value created by func operation on array
// Constraints: none
// Edge Cases: 'this' array has no elements -- return 0
Array.prototype.reduceBert = function(func, initial) {
  let accum = (initial) ? undefined : initial;
  for (let i = 0; i < this.length; i++) {
    if (accum) {
      accum = func.call(this, accum, this[i]);
    } else {
      accum = this[i];
    }
  }
  return accum;
};

let unreduced = [1, 2, -3, 4, 5, -1, 7];
let reduced = unreduced.reduceBert((accum, val) => {
  return accum * val;
});

console.log(reduced);