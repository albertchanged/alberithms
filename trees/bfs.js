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
      console.log(node);
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
      console.log(node);
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
      console.log(node);
    }
  }
  bfs() {
    let result = [];
    // Initialize queue array
    let queue = [];
    // Push this.root into queue
    queue.push(this.root);
    // While queue is not empty
    while (queue.length) {
      // Initialize node to queue.shift
      let node = queue.shift();
      // Push its value to result
      result.push(node.value);
      // console.log(node.value);
      // If node.left exists
      if (node.left) {
        // Push it to queue
        queue.push(node.left);
      }
      // If node.right exists
      if (node.right) {
        // Push it to queue
        queue.push(node.right);
      }
    }
    return result;
  }
}

const tree = new BinarySearchTree();
tree.add(10);
tree.add(5);
tree.add(3);
tree.add(12);
tree.add(7);
tree.add(30);
// console.log(JSON.stringify(tree, null, 2));
console.log(tree.bfs()); // 10 5 12 3 7 30