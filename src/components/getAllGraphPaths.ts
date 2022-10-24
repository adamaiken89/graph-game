import { ADJACENCY_MAP } from '../constants';
import { NODE } from '../types';

export const getAllGraphPaths = (startNode: NODE, endNode: NODE) => {
  let paths: NODE[][] = [];
  const graphTransversal = (startNode: NODE, endNode: NODE, list: NODE[]) => {
    ADJACENCY_MAP[startNode]
      .filter((nextNode) => !list.includes(nextNode))
      .map(function transvseGraphOrReturnPath(nextNode) {
        const newList = [...list, nextNode];
        if (nextNode === endNode) {
          paths = [...paths, newList];
          return;
        }
        graphTransversal(nextNode, endNode, newList);
      });
  };

  graphTransversal(startNode, endNode, [startNode]);
  return paths;
};
