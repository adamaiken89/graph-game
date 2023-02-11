import { GraphMap, GraphNode } from '../types';

export const getAllGraphPaths = (
  adjacencyMap: GraphMap,
  currentNode: GraphNode,
  endNode: GraphNode
) => {
  let paths: GraphNode[][] = [];
  const graphTraversal = (endNode: GraphNode, traversed: GraphNode[]) => {
    const currentNode = traversed[traversed.length - 1];
    adjacencyMap[currentNode]
      .filter((nextNode) => !traversed.includes(nextNode))
      .map(function returnPathOrTraverseGraph(nextNode) {
        const newTraversed = [...traversed, nextNode];
        if (nextNode === endNode) {
          paths = [...paths, newTraversed];
          return;
        }
        graphTraversal(endNode, newTraversed);
      });
  };

  graphTraversal(endNode, [currentNode]);
  return paths;
};
