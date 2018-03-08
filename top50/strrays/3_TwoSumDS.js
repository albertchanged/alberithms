// Design and implement a TwoSum class. It should support the following operations: add and find.
// add(input) – Add the number input to an internal data structure.
// find(value) – Find if there exists any pair of numbers which sum is equal to the value.
// For example,
// add(1); add(3); add(5); find(4) -> true; find(7) -> false

class TwoSum {
  constructor() {
    this.obj = {};
  }
  add(input) {
    if (!this.obj[input]) {
      this.obj[input] = 1;
    } else {
      this.obj[input]++;
    }
  }
  find(value) {
    for (let key in this.obj) {
      let complement = value - this.obj[key];
      if (this.obj[complement]) {
        return true;
      }
    }
    return false;
  }
}

let twoSum = new TwoSum();
twoSum.add(1);
twoSum.add(3);
twoSum.add(5);
console.log(twoSum.find(4));
console.log(twoSum.find(7));