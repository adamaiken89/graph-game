import { ADJACENCY_MAP } from '../..';
import { getShortestPathBFS } from '../getShortestPathBFS';

describe('#getShortestPathBFS', () => {
  describe('From A to H', () => {
    it('returns the shorest path', () => {
      const path = getShortestPathBFS(ADJACENCY_MAP, 'A', 'H');
      expect(path).toMatchInlineSnapshot(`
[
  "A",
  "H",
]
`);
    });
  });
});
