class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// new Node("ABC").next = new Node("DEF");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index) {
    // step by step: not to forget anything
    // index 1 -> 1 traverse -> return target node
    // 1, 2, 3 index 3
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(index, value) {
    const targetNode = this.get(index);
    if (!targetNode) return false;
    targetNode.value = value;
    return true;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return;
    }
    if (this.length === 1) {
      const popped = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return popped;
    }
    let current = this.head;
    let secondToLast = current;
    while (current.next) {
      secondToLast = current;
      current = current.next;
    }

    secondToLast.next = null;
    this.tail = secondToLast;

    this.length--;

    return current;
  }

  shift() {
    if (!this.head) {
      return;
    }
    const current = this.head;
    this.head = current.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return current;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    // swap the head and tail;
    // [this.head, this.tail] = [this.tail, this.head];
    let node = this.head;
    // this is just to save the node to instance property, node properties will change
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    let i = 0;
    while (i < this.length) {
      // start at node (prev head);
      // keep the next node separately
      next = node.next;
      // at first run make oldHead.next = null
      node.next = prev;
      // change prev to node
      prev = node;
      // make node to the next node
      node = next;
      i++;
    }
    return this;
  }
}

const list1 = new SinglyLinkedList();
// console.log(list1);
list1.push("Tu");
list1.push("Map");
list1.push("Qua");
list1.push("Chung");
// console.log(list1.set(1, "MAP"));
// list1.push("Qua");
// console.log(list1);
// list1.push("Chung");
// console.log(list1.shift());
// console.log(list1.shift());
// console.log(list1.shift());
console.log(list1.insert(2, "Khong"));
console.log(list1.get(2));
console.log(list1.remove(2));
console.log(list1.get(2));
