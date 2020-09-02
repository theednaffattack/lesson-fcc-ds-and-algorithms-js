/* Binary Search Tree! */

/* 
  A way to hold data that when visualized looks
  like a tree we might find in nature. 
  NOTE: I think it looks more like a potato plant.
 */

/* 
  1 -  All data points in the tree are called nodes.
  2 - The top of the tree is called a 'root node'.
  3 - The root node has nodes which branch out beneath
      it into additional nodes called 'child nodes'.
      Each of these nodes may also have child nodes 
      (or not).
  4 - Nodes with branches leading to other nodes are
      called parents of nodes that branch and lead to the
      child.
  5 - Leaf nodes are nodes that have no children.
  6 - A binary tree can only have two children for every
      node.
  7 - Binary search trees are ordered. Each subtree are 
      less than or equal to the parent node. Each
      right-side sub-tree are greater than the parent
      node.
 */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
}

// MANUAL TEST

const myBst = new BST();

myBst.add("some data");
