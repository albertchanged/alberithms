// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

const minDepthDFS = (root) => {
  // If root doesn't exist
  if (!root) {
    // Return 0
    return 0;
  }
  // If root left doesn't exist
  if (!root.left) {
    // Return 1 + minDepth(root.right)
    return 1 + minDepth(root.right);
  }
  // If root right doesn't exist
  if (!root.right) {
    // Return 1 + minDepth(root.left)
    return 1 + minDepth(root.left);
  }
  // Return 1 + Math.min(minDepth(root.left), minDepth(root.right))
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}

const minDepthBFS = (root) => {
  if (!root) {
    return 0;
  }
  // Initialize queue
  let queue = [];
  // Enqueue root to it
  queue.unshift(root);
  // Initialize depth
  let depth = 1;
  // Initialize rightMost to root
  let rightMost = root;
  // While queue is not empty
  while (queue.length !== 0) {
    // Dequeue and save as node
    let node = queue.shift();
    // If node left and node right both don't exist
    if (!node.left && !node.right) {
      // Break
      break;
    }
    // If node left exists
    if (node.left) {
      // Enqueue node left to queue
      queue.push(node.left);
    } 
    // If node right exists
    if (node.right) {
      // Enqueue node right to queue
      queue.push(node.right);
    } 
    // If node equals rightMost
    if (node === rightMost) {
      // Increment depth
      depth++;
      // If node right exists, set rightMost equal to node right
      // Else, set equal to node left
      rightMost = (node.right) ? node.right : node.left;
    }
  }
  // Return depth
  return depth;
}
