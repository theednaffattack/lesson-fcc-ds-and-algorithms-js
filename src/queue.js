/* Queues! */
// FIFO - first in, first out

function Queue() {
  const collection = [];

  // Log items in the queue.
  this.print = function () {
    console.log(collection);
  };

  // Add item to queue.
  this.enqueue = function (element) {
    collection.push(element);
  };
  // Remove item from queue.
  this.dequeue = function () {
    return collection.shift();
  };
  // Return first item in queue.
  this.front = function () {
    return collection[0];
  };
  // Return size (length) of queue.
  this.size = function () {
    return collection.length;
  };
  // Report if the queue is empty.
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

// MANUAL TEST

const myQueue = new Queue();

myQueue.enqueue("heeeeey");
myQueue.print();
myQueue.enqueue("aaaayyyyy");
myQueue.print();
myQueue.dequeue();
myQueue.print();
console.log(myQueue.size());
console.log(myQueue.isEmpty());
myQueue.dequeue();
myQueue.isEmpty();
myQueue.enqueue("put more");
myQueue.front();
myQueue.print();
