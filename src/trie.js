const imgcat = require("imgcat");

/* Trie */

/* 
A Trie, sometimes called a prefix tree, is a special kind of tree (structure)
used to store associative data structures.

A trie stores data in steps. Each step is a node in teh Trie, often used to 
store words. Example use case = validate a word is in a dictionary. Each 
node would represent a letter of a word. 

https://youtu.be/t2CEgPsws3U?list=PLDn22JhUbNqaf_suvX_NYIdPkFOnFIicR&t=4499
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
      // above: if the Map keys DOES NOT contain a letter
      //  matching the first letter of 'input'...

      // below: set a key in the Map to the first
      // letter of 'input'. A new Node will be the
      // value in the map.
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  };

  this.isWord = function (word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
  };

  this.print = function () {
    let words = new Array();
    let search = function (node, string) {
      if (node.keys.size != 0) {
        for (const letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        }
        if (node.isEnd) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };
    search(this.root, new String());
    return words.length > 0 ? words : null;
  };
};

// MANUAL TEST

const ti = new Trie();

ti.add("ball");
ti.add("bat");
ti.add("doll");
ti.add("dork");
ti.add("do");
ti.add("dorm");
ti.add("send");
ti.add("sense");
console.log(ti.isWord("doll"));
console.log(ti.isWord("dor"));
console.log(ti.isWord("dorf"));
console.log(ti.print());

// print image from file
imgcat("src/image/trie.png")
  .then((image) => {
    console.log(image);
  })
  .catch((e) => {
    console.log(e.name);
    console.log(e);
  });
