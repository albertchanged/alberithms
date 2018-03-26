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
      node = this.root;
    }
    return this.getHeightHelper(this.root);
  }
  getHeightHelper(node) {
    if (!node) {
      return -1;
    }
    let left = this.getHeightHelper(node.left);
    let right = this.getHeightHelper(node.right);
    return Math.max(left, right) + 1;
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
console.log(tree.getHeight());