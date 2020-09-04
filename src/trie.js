/* Trie */

/* 
A Trie, sometimes called a prefix tree, is a special kind of tree (structure)
used to store associative data structures.

A trie stores data in steps. Each step is a node in teh Trie, often used to 
store words. Example use case = validate a word is in a dictionary. Each 
node would represent a letter of a word. 
 */

let Node = function () {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};

let Trie = function () {
  this.root = new Node();

  this.add = function (input, node = this.root) {
    if (input.length === 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  };
};

// NOTE: ti = Trie Instance
const ti = Trie();
