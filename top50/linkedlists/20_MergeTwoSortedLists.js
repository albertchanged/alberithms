// Merge two sorted linked lists and return it as a new list. 
// The new list should be made by splicing together the nodes 
// of the first two lists.

// Input: two sorted linked lists
// Output: one sorted linked list
// Constraints: none
// Edge cases: missing list, use dummy node to cover
const mergedTwoSortedLists = (list1, list2) => {
  // Create dummy node
  let dummy = new Node(null, null);
  // Set node to dummy
  let node = dummy;
  // While both lists exist
  while (list1 && list2) {
    // If list1's val is less than or equal to list2's val
    if (list1.value <= list2.value) {
      // Set node's next to list1
      node.next = list1;
      // Set list1 to list1 next
      list1 = list1.next;
    } else {
      // Set node's next to list2
      node.next = list2;
      // Set list2 to list2.next
      list2 = list2.next;
    }
    // Set node to node next
    node = node.next;
  }
  // If list1 exists
  if (list1) {
    // Set node next to list1
    node.next = list1;
  }
  // If list2 exists
  if (list2) {
    // Set node next to list2
    node.next = list2;
  }
  // Return dummy next
  return dummy.next;
}
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

let node3 = new Node(6, null);
let node2 = new Node(4, node3);
let node1 = new Node(1, node2);
let list1 = node1;

let node6 = new Node(7, null);
let node5 = new Node(5, node6);
let node4 = new Node(2, node5);
let list2 = node4;

console.log(JSON.stringify(mergedTwoSortedLists(list1, list2), null, 2));