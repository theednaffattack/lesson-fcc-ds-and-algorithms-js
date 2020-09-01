/* Priority Queue! */
// You pass an element into the queue along with a priority
// Elements with a higher priority are sent to the...
// beginning of the queue.

// Everything in a priority queue is the same except
// the enqueue function. Please see src/queue.js for
// code comments on the other methods.

function PriorityQueue() {
  // We need a collection to hold the items.
  const collection = [];

  this.enqueue = function (element) {
    // First check if the collection is empty
    // if so add to the collection.
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      // If it's not empty loop over the collection
      // and compare the incoming priority to those
      // already in the collection. The priority is
      // expected to be the second item in a two-element
      // array.
      let added = false;
      for (let index = 0; index < collection.length; index++) {
        if (element[1] < collection[index][1]) {
          // If the incoming element priority is lower
          // than the collection item found at the current index
          // (remember we're in a loop) insert a new element
          // AT THAT POSITION in the collection.
          collection.splice(index, 0, element);
          // Flip the 'added' boolean to 'true'
          // and break out of the loop.
          added = true;
          break;
        }
      }
      // If 'added' is still false, then the priority
      // must be HIGHER so we'll push this onto the end
      // of the queue. This means it will exit the queue
      // first.
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function () {
    const value = collection.shift();
    return value[0];
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

// MANUAL TEST

const pq = new PriorityQueue();

pq.enqueue(["Eddie Naff", 2]);
pq.enqueue(["Quincy Larson", 3]);
pq.enqueue(["Ewa Mitulska-Wojcik", 1]);
pq.enqueue(["Briana Swift", 2]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();
