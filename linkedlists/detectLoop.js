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


let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node3;

console.log(node1.containsLoop(node5));