import { getAllGraphPathsBFS } from './components/getAllGraphPathsBFS';
import { getShortestPathBFS } from './components/getShortestPathBFS';
import { GraphMap } from './types';

export const ADJACENCY_MAP: GraphMap = {
  A: ['B', 'D', 'H'],
  B: ['A', 'C', 'D'],
  C: ['B', 'D', 'F'],
  D: ['A', 'B', 'C', 'E'],
  E: ['D', 'F', 'H'],
  F: ['C', 'E', 'G'],
  G: ['F', 'H'],
  H: ['F', 'H'],
};

const pathsBFS = getAllGraphPathsBFS(ADJACENCY_MAP, 'A', 'H');
pathsBFS.map((path) => console.log(`The path is ${path} by BFS`));

const shortestPathBFS = getShortestPathBFS(ADJACENCY_MAP, 'A', 'H');
console.log(`The shortest path is ${shortestPathBFS} by BFS`);
