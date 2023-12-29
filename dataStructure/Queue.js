class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  // push after last
  enqueue(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      const temp = this.last;
      temp.next = node;
      this.last = node;
    }

    return ++this.size;
  }
  // remove from first
  dequeue() {
    if (this.size === 0) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    const temp = this.first;
    const newFirst = temp.next;

    this.first = newFirst;
    this.size--;
    return temp.val;
  }
}

const queue = new Queue();

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue);
