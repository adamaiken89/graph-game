import { NODE } from '../constant';
import { getAllGraphPaths } from './getAllGraphPaths';

// Choose the first one the program find when there are more than one answers
export const getShortestPath = (startNode: NODE, endNode: NODE) => {
  const paths = getAllGraphPaths(startNode, endNode);
  return paths.reduce((selected, path) => {
    return path.length < selected.length || selected.length === 0
      ? path
      : selected;
  }, []);
};
