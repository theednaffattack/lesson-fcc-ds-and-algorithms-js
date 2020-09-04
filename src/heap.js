const imgcat = require("imgcat");

/* HEAP */

/* 

https://youtu.be/t2CEgPsws3U?list=PLDn22JhUbNqaf_suvX_NYIdPkFOnFIicR&t=5251

Algorithm visualization
https://youtu.be/t2CEgPsws3U?list=PLDn22JhUbNqaf_suvX_NYIdPkFOnFIicR&t=5590
 */

//  Also see: https://www.cs.usfca.edu/~galles/visualization/Heap.html

// left child: i * 2
// right child: i * 2 + 1
// parent: floor(i / 2)
// NOTE: parent is always rounded down to the nearest whole
// number.

let MinHeap = function () {
  let heap = [null];

  this.insert = function (num) {
    heap.push(num);
    if (heap.length > 2) {
      let idx = heap.length - 1;
      while (heap[idx] < heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          [heap[Math.floor(idx / 2)], heap[idx]] = [
            heap[idx],
            heap[Math.floor(idx / 2)],
          ];

          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  };

  this.remove = function () {
    let smallest = heap[1];
    // The smallest should be the top,
    // heap[0] is null.

    if (heap.length > 2) {
      // below: set the last node in the array to be first.
      heap[1] = heap[heap.length - 1];
      // below: shorten the array by one.
      heap.splice(heap.length - 1);
      // if there are only two nodes, it's easy
      // just switch them if the first postion is
      // greater than the second.
      if (heap.length === 3) {
        if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }

      // If there are more than two items in the Heap...
      let index = 1;
      let left = 2 * 1;
      let right = 2 * index + 1;
      while (heap[index] >= heap[left] || heap[index] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[index], heap[left]] = [heap[left], heap[index]];
          index = 2;
        } else {
          [heap[index], heap[right]] = [heap[right], heap[index]];
          index = 2 * index + 1;
        }
        left = 2 * index;
        right = 2 * index + 1;
        if (heap[left] === undefined || heap[right] === undefined) {
          break;
        }
      }
    } else if (heap.length === 2) {
      heap.splice(1, 1);
    }
  };

  this.sort = function () {
    let result = new Array();
    while (heap.length > 1) {
      result.push(this.remove());
    }
    return result;
  };
};

imgcat(
  "https://cdn-media-1.freecodecamp.org/images/1*Lu5E1YaakS3JFcCqOsiniw.png",
  { log: true }
);
