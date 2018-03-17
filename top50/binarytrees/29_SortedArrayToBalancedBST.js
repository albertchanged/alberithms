// Given an array where elements are sorted in ascending order, 
// convert it to a height balanced BST.

const sortedArrayToBalancedBST = (array) => {
  // Return sortedArrayToBalancedHelper, passing in 0 and length
  return sortedArrayToBalancedBSTHelper(array, 0, array.length - 1);
}
const sortedArrayToBalancedBSTHelper = (array, left, right) => {
  // If left > right
  if (left > right) {
    // Return null
    return null;
  }
  // Initialize mid as average of left and right
  let mid = left + Math.floor((right - left) / 2);
  // Initialize node with the mid value
  let node = new Node(array[mid]);
  // Set node left as this, passing in left, mid - 1
  node.left = sortedArrayToBalancedBSTHelper(array, left, mid - 1);
  // Set node right as this, passing in mid + 1, right
  node.right = sortedArrayToBalancedBSTHelper(array, mid + 1, right);
  // Return node
  return node;
}
class Node {
  constructor(value) {
    this.value = value;
  }
}

console.log(sortedArrayToBalancedBST([1, 2, 4, 6, 7, 10]));