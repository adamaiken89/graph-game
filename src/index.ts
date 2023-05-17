import { getAllGraphPathsBFS } from './components/getAllGraphPathsBFS';
import { getShortestPathBFS } from './components/getShortestPathBFS';
import { GraphMap } from './types';

export const adjacencyMap: GraphMap = {
  A: ['B', 'D', 'H'],
  B: ['A', 'C', 'D'],
  C: ['B', 'D', 'F'],
  D: ['A', 'B', 'C', 'E'],
  E: ['D', 'F', 'H'],
  F: ['C', 'E', 'G'],
  G: ['F', 'H'],
  H: ['F', 'H'],
} as const;

const pathsBFS = getAllGraphPathsBFS(adjacencyMap, 'A', 'H');
pathsBFS.map((path) => console.log(`The path is ${path} by BFS`));

const shortestPathBFS = getShortestPathBFS(adjacencyMap, 'A', 'H');
console.log(`111The shortest path is ${shortestPathBFS} by BFS`);
