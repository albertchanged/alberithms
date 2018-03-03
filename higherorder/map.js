// Input: a function
// Output: a new array with new values
// Constraints: none
// Edge Cases: no elements in 'this' array -- return array anyway
Array.prototype.mapBert = function(func) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    array.push(func(this[i]));
  }
  return array;
};

let unmapped = [1, 2, 3, 4, 5];
let mapped = unmapped.mapBert((num) => {
  return num * 2;
});

console.log(mapped);