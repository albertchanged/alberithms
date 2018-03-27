class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  add(value) {
    // Initialize new node with value
    let node = new Node(value);
    // If this.root doesn't exist
    if (!this.root) {
      // Set it to node
      this.root = node;
    } else {
      // Initialize current as this.root
      let current = this.root;
      // While current
      while (current) {
        // If node's value is less than current's value
        if (node.value < current.value) {
          // if current's left is null
          if (!current.left) {
            // Set current's left to node
            current.left = node;
            // Break
            break;
          }
          // Set current to its left
          current = current.left;
        } else if (node.value > current.value) {
          // If current's right is null
          if (!current.right) {
            // Set current's right to node
            current.right = node;
            // Break
            break;
          }
          // Set current to its right
          current = current.right;
        } else {
          break;
        }
      }
    }
  }
  getHeight(node) {
    if (!node) {
      return -1;
    }
    let left = this.getHeight(node.left);
    let right = this.getHeight(node.right);
    return Math.max(left, right) + 1;
  }
  isBalanced(node) {
    if (!node) {
      node = this.root;
    }
    return this.isBalancedHelper(node);
  }
  isBalancedHelper(node) {
    if (!node) {
      return true;
    }
    let heightLeft = this.getHeight(node.left);
    let heightRight = this.getHeight(node.right);
    let diff = Math.abs(heightLeft - heightRight);
    return (diff > 1) ? false : this.isBalancedHelper(node.left) && this.isBalancedHelper(node.right);
  }
}

const tree = new BinarySearchTree();
tree.add(10);
tree.add(5);
tree.add(3);
tree.add(12);
tree.add(7);
tree.add(30);
console.log(JSON.stringify(tree, null, 2));
console.log(tree.isBalanced());