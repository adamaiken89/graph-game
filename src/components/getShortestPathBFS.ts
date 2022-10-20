import { GraphMap, GraphNode } from '../types';

export const getShortestPathBFS = (
  adjacencyMap: GraphMap,
  startNode: GraphNode,
  endNode: GraphNode
) => {
  let path: GraphNode[] = [];
  const graphTraversal = (endNode: GraphNode, possiblePaths: GraphNode[][]) => {
    let newPossiblePaths: GraphNode[][] = [];
    for (const possiblePath of possiblePaths) {
      const lastNode = possiblePath[possiblePath.length - 1];
      const tempPossiblePaths = adjacencyMap[lastNode]
        .filter((nextNode) => !possiblePath.includes(nextNode))
        .map(function getNewPath(nextNode) {
          return [...possiblePath, nextNode];
        });

      for (const tempPossiblePath of tempPossiblePaths) {
        const nextNode = tempPossiblePath[tempPossiblePath.length - 1];
        if (nextNode === endNode) {
          path = tempPossiblePath;
          return;
        }
      }

      newPossiblePaths = [...newPossiblePaths, ...tempPossiblePaths];
    }

    if (newPossiblePaths.length === 0) {
      return;
    }
    graphTraversal(endNode, newPossiblePaths);
  };

  graphTraversal(endNode, [[startNode]]);
  return path;
};
