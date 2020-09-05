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

    // get all the nodes connected to the current node
    // each index of the graph is an array that shows
    // us what nodes are connected to root node associated
    // with that index.
    const currentConnected = graph[current];

    // Keep track of a list of connected nodes to the
    // current node.
    const neighborIndex = [];
    // https://youtu.be/t2CEgPsws3U?list=PLDn22JhUbNqaf_suvX_NYIdPkFOnFIicR&t=6683
    // get the first node connected to the current node
    // It's set to 1 here because the number 1
    // signifies connection in our array to another node.
    // The number's numerical value is inconsequential.
    let index = currentConnected.indexOf(1);
    // indexOf's "not found" returns -1
    while (index != -1) {
      // if it's not connected it's a neighbor
      neighborIndex.push(index);
      // search for the next connected node
      // start the indexOf search +1 to get the
      // next node.
      index = currentConnected.indexOf(1, index + 1);
    }
    for (let j = 0; j < neighborIndex.length; j++) {
      // 'nodesLength' was initialized to Infinity at every
      // position. If item in 'nodesLength' indexed by the 'neighborIndex'
      // item indexed by or loop index 'j' is STILL Infinity we'll
      // set the distance for it now.
      if (nodesLength[neighborIndex[j]] == Infinity) {
        // set it to the value in 'nodesLength' array (the current val)
        // plus 1.
        nodesLength[neighborIndex[j]] = nodesLength[current] + 1;
        // push this neighbor to the queue so we can
        // check its neighbors.
        queue.push(neighborIndex[j]);
      }
    }
  }
  return nodesLength;
}

const exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
];

console.log(bfs(exBFSGraph, 1));
