// Given a Linked List and a number n, write a function that returns the value at the 
// n’th node from end of the Linked List.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const printNthLast = (node, n) => {
  let current = node;
  let main = node;
  let count = 0;
  while (count < n) {
    if (!current) {
      return null;
    }
    current = current.next;
    count++;
  }
  while (current) {
    main = main.next;
    current = current.next;
  }
  return main.value;
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

console.log(printNthLast(node1, 5));