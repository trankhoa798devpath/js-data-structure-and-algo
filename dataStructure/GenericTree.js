class TreeNode {
  constructor(val) {
    this.val = val;
    this.children = null;
  }
}

class GenericTree {
  constructor() {
    this.root = null;
  }

  breadthFirstTraverse() {
    const queue = [];
    const visited = [];

    if (!this.root) return results;

    queue.push(this.root);

    while (queue.length > 0) {
      const dequeuedNode = queue.shift();
      visited.push(dequeuedNode.val);

      if (dequeuedNode.children && dequeuedNode.children.length) {
        queue.push(...dequeuedNode.children);
      }
    }

    return visited;
  }

  // Visit the entire left and the entire right then the parent node
  depthFirstSearch_preOrder(parentNode) {
    const visited = [];

    if (!this.root) return results;

    if (!parentNode) {
      visited.push(...this.depthFirstSearch_preOrder(this.root));
    } else {
      visited.push(parentNode.val);
      if (parentNode.children && parentNode.children.length) {
        for (const child of parentNode.children) {
          visited.push(...this.depthFirstSearch_preOrder(child));
        }
      }
    }

    return visited;
  }

  // Visit the node first then the entire left and the entire right
  depthFirstSearch_postOrder(parentNode) {
    const visited = [];

    if (!this.root) return results;

    if (!parentNode) {
      visited.push(...this.depthFirstSearch_postOrder(this.root));
    } else {
      if (parentNode.children && parentNode.children.length) {
        for (const child of parentNode.children) {
          visited.push(...this.depthFirstSearch_postOrder(child));
        }
      }

      visited.push(parentNode.val);
    }

    return visited;
  }
}

const root = new TreeNode(1);

const tree = new GenericTree();
tree.root = root;
tree.root.children = [new TreeNode(2), new TreeNode(3), new TreeNode(4)];
tree.root.children[0].children = [
  new TreeNode(5),
  new TreeNode(6),
  new TreeNode(7),
];

tree.root.children[0].children[0].children = [
  new TreeNode(8),
  new TreeNode(9),
  new TreeNode(10),
];

const root2 = new TreeNode(10);

const tree2 = new GenericTree();
tree2.root = root2;
tree2.root.children = [new TreeNode(6), new TreeNode(15)];
tree2.root.children[0].children = [new TreeNode(3), new TreeNode(8)];
tree2.root.children[1].children = [new TreeNode(20)];

console.log(tree2.depthFirstSearch_preOrder());
console.log(tree2.depthFirstSearch_postOrder());
