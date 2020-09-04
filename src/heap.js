const imgcat = require("imgcat");

/* HEAP */

/* 

https://youtu.be/t2CEgPsws3U?list=PLDn22JhUbNqaf_suvX_NYIdPkFOnFIicR&t=5251
 */

// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

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
    // do some stuff
  };
};

imgcat(
  "https://cdn-media-1.freecodecamp.org/images/1*Lu5E1YaakS3JFcCqOsiniw.png",
  { log: true }
);
