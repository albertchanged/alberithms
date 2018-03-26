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
  preOrder(node) {
    if (node) {
      console.log(node.value);
      if (node.left) {
        this.preOrder(node.left);
      }
      if (node.right) {
        this.preOrder(node.right);
      }
    }
  }
  inOrder(node) {
    if (node) {
      if (node.left) {
        this.inOrder(node.left);
      }
      console.log(node.value);
      if (node.right) {
        this.inOrder(node.right);
      }
    }
  }
  postOrder() {
    if (node) {
      if (node.left) {
        this.inOrder(node.left);
      }
      if (node.right) {
        this.inOrder(node.right);
      }
      console.log(node.value);
    }
  }
  findMin() {
    let node = this.root;
    if (!node) {
      return null;
    }
    while (node.left) {
      node = node.left;
    }
    return node.value;
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
console.log(tree.findMin());