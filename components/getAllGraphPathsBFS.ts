import { ADJACENCY_MAP } from '../constant';
import { NODE } from '../types';

export const getAllGraphPathsBFS = (startNode: NODE, endNode: NODE) => {
  let paths: NODE[][] = [];
  const graphTransversal = (endNode: NODE, possiblePaths: NODE[][]) => {
    const newPossiblePaths = possiblePaths.reduce((result, possiblePath) => {
      function getNewPath(nextNode: NODE) {
        return [...possiblePath, nextNode];
      }
      function arriveDestination(currentPath: NODE[]) {
        const nextNode = currentPath[currentPath.length - 1];
        if (nextNode === endNode) {
          paths = [...paths, currentPath];
          return false;
        }
        return true;
      }

      const lastNode = possiblePath[possiblePath.length - 1];
      const newPossiblePath = ADJACENCY_MAP[lastNode]
        .filter((nextNode) => !possiblePath.includes(nextNode))
        .map(getNewPath)
        .filter(arriveDestination);
      return [...result, ...newPossiblePath];
    }, [] as NODE[][]);

    if (newPossiblePaths.length === 0) {
      return;
    }
    graphTransversal(endNode, newPossiblePaths);
  };

  graphTransversal(endNode, [[startNode]]);
  return paths;
};
