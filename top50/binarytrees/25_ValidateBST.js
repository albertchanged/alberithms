// Given a binary tree, determine if it is a valid Binary Search Tree (BST).

const validBST = (root) => {
  // Pass null and null as low and high into validBSTHelper
  return validBSTHelper(root, null, null);
}

const validBSTHelper = (root, low, high) => {
  // If root does not exist
  if (!root) {
    // Return true
    return true;
  }
  // Return (low === null OR root.val > low) AND (high === null OR root.val < high)
  // AND validBSTHelper(root.left, low, root.val)
  // AND validBSTHelper(root.right, root.val, high)
  return (low === null || root.val > low) && (high === null || root.val < high)
    && validBSTHelper(root.left, low, root.val)
    && validBSTHelper(root.right, root.val, high);
}