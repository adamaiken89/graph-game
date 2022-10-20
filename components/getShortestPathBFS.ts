import { ADJACENCY_MAP } from '../constant';
import { NODE } from '../types';

export const getShortestPathBFS = (startNode: NODE, endNode: NODE) => {
  let path: NODE[] = [];
  const graphTransversal = (endNode: NODE, possiblePaths: NODE[][]) => {
    let newPossiblePaths: NODE[][] = [];
    for (const possiblePath of possiblePaths) {
      const lastNode = possiblePath[possiblePath.length - 1];
      const tempPossiblePaths = ADJACENCY_MAP[lastNode]
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
    graphTransversal(endNode, newPossiblePaths);
  };

  graphTransversal(endNode, [[startNode]]);
  return path;
};
