// Given a singly linked list, find middle of the linked list. 
// For example, if given linked list is 1->2->3->4->5 then output should be 3.
//
// If there are even nodes, then there would be two middle nodes, 
// we need to print second middle element. For example, 
// if given linked list is 1->2->3->4->5->6 then output should be 4.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const printMiddle = (node) => {
  let slow = node;
  let fast = node;
  
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow.value;
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

console.log(printMiddle(node1));
