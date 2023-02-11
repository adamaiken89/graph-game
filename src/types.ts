export type GraphNode = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export type GraphMap = {
  [k in GraphNode]: readonly GraphNode[];
};
