/* Graphs */

/* 
Graphs:
https://youtu.be/t2CEgPsws3U?list=PLDn22JhUbNqaf_suvX_NYIdPkFOnFIicR&t=6129

Breadth-First Search
https://youtu.be/t2CEgPsws3U?list=PLDn22JhUbNqaf_suvX_NYIdPkFOnFIicR&t=6405

Graph Notes:
- Connection points in Graphs are known as "nodes" or "vertices"
- Connections between the nodes are called "edges"

Two Types of Graphs: Directed or Undirected

Undirected - NO directions in its edges

Directed - directions in its edges

====
3 TYPES OF GRAPHS
====

Adjacency List
https://youtu.be/t2CEgPsws3U?list=PLDn22JhUbNqaf_suvX_NYIdPkFOnFIicR&t=6194
==============
Associates each vertex with a collections of its neighboring verteces
or edges.

Node A: Node B
Node B: Node A, Node C
Node C: Node B

Adjacency Matrix
https://youtu.be/t2CEgPsws3U?list=PLDn22JhUbNqaf_suvX_NYIdPkFOnFIicR&t=6235
================

|   | a | b | b |
|---|---|---|---|
| a | 0 | 1 | 0 |
| b | 1 | 0 | 1 |
| c | 0 | 1 | 0 |


Incidence Matrix
https://youtu.be/t2CEgPsws3U?list=PLDn22JhUbNqaf_suvX_NYIdPkFOnFIicR&t=6313
================

|   | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| a | 1 | 0 | 1 | 1 |
| b | 1 | 1 | 0 | 0 |
| c | 0 | 1 | 1 | 0 |
| d | 0 | 0 | 0 | 1 |
 */

// const undirectedGraphExample = {
//   NodeA: ["NodeB"],
//   NodeB: ["NodeA", "NodeC"],
//   NodeC: ["NodeB"],
// };

// const adjacencyMatrixExample = [
//   [0, 1, 0],
//   [1, 0, 1],
//   [0, 1, 0],
// ];

// // below is unweighted, no values greater than one.
// const incidenceMatrixExample = [
//   [1, 0, -1, 1],
//   [-1, 1, 0, 0],
//   [0, -1, 1, 0],
//   [0, 0, 0, -1],
// ];
