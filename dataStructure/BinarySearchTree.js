class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Find & Insert are O(log n) on best and average scenario
  // Worst case is O(n) - One-sided tree 3 -> 10 -> 15 -> ... -> n
  // choose another root for the tree to make things more efficient

  iterativeInsert(val) {
    const node = new Node(val);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (true) {
      if (current.val === val) return undefined;

      if (current.val < val) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
    }
  }

  insert(val, parentNode) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    if (parentNode) {
      if (val === parentNode.val) {
        return undefined;
      }

      if (val < parentNode.val) {
        if (!parentNode.left) {
          parentNode.left = newNode;
          return this;
        }
        return this.insert(val, parentNode.left);
      } else {
        if (!parentNode.right) {
          parentNode.right = newNode;
          return this;
        }

        return this.insert(val, parentNode.right);
      }
    }

    return this.insert(val, this.root);
  }

  contain(val, currentNode = this.root) {
    if (!this.root) return false;

    if (this.root.val === val) return true;

    if (currentNode) {
      if (currentNode.val === val) return true;

      if (val > currentNode.val) {
        return this.contain(val, currentNode.right);
      } else {
        return this.contain(val, currentNode.left);
      }
    }

    return false;
  }

  iterativeContain(val) {
    if (!this.root) return false;

    let current = this.root;

    while (current) {
      if (current.val === val) return true;

      if (current.val < val) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }
}

const root = new Node(10);

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(9);
bst.iterativeInsert(11);
bst.insert(13);
// bst.iterativeInsert(13);

// console.log(bst);
// console.log(bst.iterativeInsert(13));

console.log(bst.iterativeContain(100));
// console.log(bst.contain(10));
console.log(bst.iterativeContain(11));
// console.log(bst.contain(9));
