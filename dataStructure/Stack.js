class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = this.first;
    } else {
      const currentFirst = this.first;
      node.next = currentFirst;
      this.first = node;
    }

    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;

    if (this.first === this.last) {
      this.last = null;
    }

    let currentFirst = this.first;
    this.first = this.first.next;
    this.size--;

    return currentFirst.val;
  }
}

const stack = new Stack();

console.log(stack.push("A").push("B").push("C"));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
