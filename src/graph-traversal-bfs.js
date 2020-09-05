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
  nodesLength[root] = 0;

  const queue = [root];
  // keep track of the current node we're traversing.
  let current;

  while (queue.length != 0) {
    current = queue.shift();

    const currentConnected = graph[current];
    const neighborIndex = [];
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
