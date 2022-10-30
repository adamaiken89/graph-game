import { GraphMap, GraphNode } from '../types';

export const getAllGraphPathsBFS = (
  adjacencyMap: GraphMap,
  startNode: GraphNode,
  endNode: GraphNode
) => {
  let paths: GraphNode[][] = [];
  const graphTraversal = (endNode: GraphNode, possiblePaths: GraphNode[][]) => {
    const newPossiblePaths = possiblePaths.reduce((result, possiblePath) => {
      const notHitBack = (nextNode: GraphNode) =>
        !possiblePath.includes(nextNode);
      const getNewPath = (nextNode: GraphNode) => [...possiblePath, nextNode];
      const notArriveDestination = (currentPath: GraphNode[]) => {
        const nextNode = currentPath[currentPath.length - 1];
        if (nextNode === endNode) {
          paths = [...paths, currentPath];
          return false;
        }
        return true;
      };
      const lastNode = possiblePath[possiblePath.length - 1];
      const newPossiblePath = adjacencyMap[lastNode]
        .filter(notHitBack)
        .map(getNewPath)
        .filter(notArriveDestination);
      return [...result, ...newPossiblePath];
    }, [] as GraphNode[][]);

    if (newPossiblePaths.length === 0) {
      return;
    }
    graphTraversal(endNode, newPossiblePaths);
  };

  graphTraversal(endNode, [[startNode]]);
  return paths;
};
