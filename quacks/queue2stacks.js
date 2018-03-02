function Queue2Stacks() {
  this.stack1 = [];
  this.stack2 = [];
};

// Push item onto stack1
Queue2Stacks.prototype.enqueue = function(value) {
  this.stack1.push(value);
};

// Remove item from stack2
// If non-empty, we're really just returning top element from outStack
Queue2Stacks.prototype.dequeue = function() {
  // If stack2 is empty
  if (this.stack2.length === 0) {
    // Push everything from stack1 into stack2
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  // Return top element, subsequently removing it
  return this.stack2.pop();
};

var queue = new Queue2Stacks();
queue.enqueue(1);
queue.enqueue(4);
console.log(queue.dequeue());

