import { NODE } from './types';

export const ADJACENCY_MAP: {
  [k in NODE]: NODE[];
} = {
  A: ['B', 'D', 'H'],
  B: ['A', 'C', 'D'],
  C: ['B', 'D', 'F'],
  D: ['A', 'B', 'C', 'E'],
  E: ['D', 'F', 'H'],
  F: ['C', 'E', 'G'],
  G: ['F', 'H'],
  H: ['F', 'H'],
};
