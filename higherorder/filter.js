// Input: a function
// Output: an array with elements that match func's restrictions
// Constraints: none
// Edge Cases: 'this' array has no elements -- still return array
Array.prototype.filterBert = function(func) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      array.push(this[i]);
    }
  }
  return array;
};

let unfiltered = [1, 2, 3, 4, 5];
let filtered = unfiltered.filterBert((num) => {
  return num > 2;
});

console.log(filtered);