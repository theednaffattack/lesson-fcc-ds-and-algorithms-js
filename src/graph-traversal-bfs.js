/* Graphs: Breadth-first search */

// This function outputs an object of key / value pairs where
// a key is the node and its value is its distance from the
// root.
function bfs(graph, root) {
  // Stores the distances to the root node.
  const nodesLength = {};

  // Start all the distances at Infinity.
  for (let index = 0; index < graph.length; index++) {
    nodesLength[index] = Infinity;
  }

  // Set the distance of the root node, from the
  // root node, to zero.
  nodesLength[root] = 0;

  // Create a queue to keep track of nodes to visit.
  const queue = [root];

  // Keep track of the current node we're traversing.
  let current;

  // Keep travesing nodes until we've traversed them
  // all from the queue.
  while (queue.length != 0) {
    // Pop off a node to traverse. At the
    // beginning this is the root node.
    current = queue.shift();

    const currentConnected = graph[current];
    const neighborIndex = [];
    // https://youtu.be/t2CEgPsws3U?list=PLDn22JhUbNqaf_suvX_NYIdPkFOnFIicR&t=6683
    let index = currentConnected.indexOf(1);
    while (index != -1) {
      neighborIndex.push(index);
      index = currentConnected.indexOf(1, index + 1);
    }
  }
}

const exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
];

console.log(bfs(exBFSGraph, 1));
