/* Sets! */

// A Set is a unique list (they are array-like) of items

function MySet() {
  // the variable 'collection' will hold the Set
  const collection = [];

  // the 'has' method will check for the presence of
  // an element and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  // this method will return all the values in a Set
  this.values = function () {
    return collection;
  };

  // this method will add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // this method will remove an element from a Set
  this.remove = function (element) {
    if (this.has(element)) {
      const index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };

  // this method will return the union of two sets
  this.union = function (otherSet) {
    const unionSet = new Set();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach(function (el) {
      unionSet.add(el);
    });
    secondSet.forEach(function (val) {
      unionSet.add(val);
    });
    return unionSet;
  };
}

const makeSet = new MySet();

console.log(makeSet.has("blerg"));
