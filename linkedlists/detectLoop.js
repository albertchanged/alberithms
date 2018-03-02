function Node(value) {
  this.value = value;
  this.next = null;
}

Node.prototype.containsLoop = function(node) {
  // Initialize fast and slow to node
  let fast = node;
  let slow = node;
  // While fast still has room to go
  while (fast && fast.next) {
    // If slow and fast are equal, there's a loop! Return true
    if (slow === fast) { return true; }
    // Move slow once
    slow = slow.next;
    // Move fast twice
    fast = fast.next.next;
  }
  return false;
}


