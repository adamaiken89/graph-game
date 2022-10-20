import { ADJACENCY_MAP } from '../..';
import { getShortestPath } from '../getShortestPath';

describe('#getShortestPath', () => {
  describe('From A to H', () => {
    it('returns the shorest path', () => {
      const path = getShortestPath(ADJACENCY_MAP, 'A', 'H');
      expect(path).toMatchInlineSnapshot(`
[
  "A",
  "H",
]
`);
    });
  });
});
