class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

// 'A' 'B' 'C' 'D' 'E'
//  0   1   2   3   4

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    const isStartingFromHead =
      Math.abs(0 - index) < Math.abs(index - (this.length - 1));

    let counter = isStartingFromHead ? 0 : this.length - 1;
    let current = isStartingFromHead ? this.head : this.tail;
    while (counter !== index) {
      if (isStartingFromHead) {
        current = current.next;
        counter++;
      } else {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  // return removed node or undefined
  shift() {
    if (this.length < 1) {
      return;
    }

    const currentHead = this.head;
    const newHead = currentHead.next;
    if (newHead) {
      this.head = newHead;
      this.head.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return currentHead;
  }

  // return removed node or undefined
  pop() {
    if (this.length < 1) {
      return;
    }
    const currentTail = this.tail;
    const newTail = currentTail.prev;
    if (newTail) {
      this.tail = newTail;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return currentTail;
  }

  insert(index, val) {
    const node = new Node(val);

    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const prev = this.get(index - 1);
    const currentNext = prev.next;

    prev.next = node;
    node.prev = prev;

    node.next = currentNext;
    currentNext.prev = node;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const current = this.get(index);
    const prev = current.prev;
    const next = current.next;

    prev.next = next;
    next.prev = prev;
    this.length--;
    return current;
  }

  reverse() {
    let node = this.head;
    [this.head, this.tail] = [this.tail, this.head];
    let prev = null;
    let next;
    while (node) {
      next = node.next;
      node.next = prev;
      node.prev = next;
      prev = node;
      node = next;
    }
    return this;
  }
}

const dll = new DoublyLinkedList();
dll.push("A").push("B");

// console.log(dll.get(0));
// console.log(dll.get(1));
// console.log(dll.get(2));
// console.log(dll.get(3));
// console.log(dll.get(4));
// console.log(dll.get(5));
dll.insert(2, "C");
console.log(dll);
dll.remove(2);
console.log(dll);
dll.remove(0);
console.log(dll);
