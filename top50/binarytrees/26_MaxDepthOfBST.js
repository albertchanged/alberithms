// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

const maxDepth = (root) => {
  // If root does not exist
  if (!root) {
    // Return 0
    return 0;
  }
  // Return 1 + maximum of 
  // maxDepth(root.left) and maxDepth(root.right)
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}