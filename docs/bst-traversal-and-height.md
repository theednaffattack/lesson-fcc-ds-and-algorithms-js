# Notes for BST Traversal and Height

## Tree Height

[DS and Algorithms in JS @ 41:26](https://youtu.be/t2CEgPsws3U?list=PLDn22JhUbNqaf_suvX_NYIdPkFOnFIicR&t=2486)

- Height in a tree represents the distance from the root node to any given leaf node.
- In a given tree there will be a min height and max height. If the tree is balanced these numbers will differ at most by 1.
- When a tree is balanced it makes traversing the tree much more efficient.

## Traversal Methods

[DS and Algorithms in JS @ 43:15](https://youtu.be/t2CEgPsws3U?list=PLDn22JhUbNqaf_suvX_NYIdPkFOnFIicR&t=2595)

- Depth First Search = a given sub-tree is explored as deeply as possible before the search continues on another sub-tree.

  - In ordedr traversal = Begin search at left-most node and end at right-most node.
  - Pre order traversal = Explore root nodes before the leaf nodes.
  - Post order traversal = Explores leaf nodes before the root nodes.

- Breadth First Search = This explores all the nodes in a given level within a tree before moving to explore the next level.

  - Level Order = 