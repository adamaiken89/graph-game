import { GraphMap, GraphNode } from '../types';

export const getAllGraphPaths = (
  adjacencyMap: GraphMap,
  currentNode: GraphNode,
  endNode: GraphNode
) => {
  let paths: GraphNode[][] = [];
  const graphTraversal = (endNode: GraphNode, list: GraphNode[]) => {
    const currentNode = list[list.length - 1];
    adjacencyMap[currentNode]
      .filter((nextNode) => !list.includes(nextNode))
      .map(function returnPathOrTraverseGraph(nextNode) {
        const newList = [...list, nextNode];
        if (nextNode === endNode) {
          paths = [...paths, newList];
          return;
        }
        graphTraversal(endNode, newList);
      });
  };

  graphTraversal(endNode, [currentNode]);
  return paths;
};
