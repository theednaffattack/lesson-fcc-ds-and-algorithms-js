/* Hash Table! */

/* 
Used to implement to associative arrays or key / value pairs.
Widely used because of their efficiency.  Lookups are not tied
to the number of elements in the hash table.

"O" notation times:
| Algorithm | Average | Worst Case |
|-----------|---------|------------|
| Space     | O(n)    | O(n)       |
| Search    | O(1)    | O(n)       |
| Insert    | O(1)    | O(n)       |
| Delete    | O(1)    | O(n)       |
 */

const hashFunc = (string, max) => {
  let hash = 0;
  for (let index = 0; index < string.length; index++) {
    hash += string.charCodeAt(index);
  }
  return hash % max;
};

let HashTable = function () {
  const storage = [];
  const storageLimit = 4;

  this.add = function (key, value) {
    let index = hashFunc(key, storageLimit);

    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.lookup = function (key) {
    const index = hashFunc(key, storageLimit);

    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };

  this.print = function () {
    console.log(storage);
  };

  this.remove = function (key) {
    const index = hashFunc(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };
};

// MANUAL TEST

console.log(hashFunc("eddie", 10));

let ht = new HashTable();

ht.add("quincy", "person");
ht.add("fido", "dog");
ht.add("rex", "dinosaur");
ht.add("tux", "penguin");
console.log(ht.lookup("tux"));
ht.print();
