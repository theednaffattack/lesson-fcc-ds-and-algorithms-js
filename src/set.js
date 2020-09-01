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
  this.delete = function (element) {
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

  // This method will return the union of two sets
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

  // This method will return teh difference of two sets
  // as a new set.
  this.intersection = function (otherSet) {
    const intersectionSet = new MySet();
    const firstSet = this.values();
    firstSet.forEach(function (val) {
      if (otherSet.has(val)) {
        intersectionSet.add(val);
      }
    });
    return intersectionSet;
  };

  // This method will return the difference of two
  // sets as a new Set.
  this.difference = function (otherSet) {
    const differenceSet = new MySet();
    const firstSet = this.values();
    firstSet.forEach(function (val) {
      if (!otherSet.has(val)) {
        differenceSet.add(val);
      }
    });
    return differenceSet;
  };

  // This method will test if the set is a subset of a
  // different Set.
  this.subset = function (otherSet) {
    const firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

// ============
// MANUAL TESTING

const setA = new MySet();
const setB = new MySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

const setC = new Set();
const setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
