class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class NewSinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

const exlist1 = new NewSinglyLinkedList();
exlist1.push("Khoa");
console.log(exlist1);
exlist1.push("Heo");
console.log(exlist1);
exlist1.push("Tron");
console.log(exlist1);
exlist1.push("Quay");
console.log(exlist1);
exlist1.push("End");
console.log(exlist1);
