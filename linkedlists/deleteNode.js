// Given a Singly Linked List, write a function to delete a given node. Your function must follow following constraints:
// 1) It must accept pointer to the start node as first parameter and node to be deleted as second parameter i.e., 
//   pointer to head node is not global.
// 2) It should not return pointer to the head node.
// 3) It should not accept pointer to pointer to head node.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const deleteNode = (head, target) => {
  if (head === target) {
    if (!head.next) {
      return null;
    }
    head.data = head.next.data;
    target = head.next;
    head.next = head.next.next;
    return;
  }
  let prev = head;
  while (prev.next && prev.next !== target) {
    prev = prev.next;
  }
  if (!prev.next) {
    return;
  }
  prev.next = prev.next.next;
  return;
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
node5.next = null;

console.log(JSON.stringify(node1, null, 2));
deleteNode(node1, node4);
console.log(JSON.stringify(node1, null, 2));