import { GraphMap, GraphNode } from '../types';
import { getAllGraphPaths } from './getAllGraphPaths';

// Choose the first one the program find when there are more than one answers
export const getShortestPath = (
  adjacencyMap: GraphMap,
  startNode: GraphNode,
  endNode: GraphNode
) => {
  const paths = getAllGraphPaths(adjacencyMap, startNode, endNode);
  return paths.reduce((selected, path) => {
    return path.length < selected.length || selected.length === 0
      ? path
      : selected;
  }, []);
};
