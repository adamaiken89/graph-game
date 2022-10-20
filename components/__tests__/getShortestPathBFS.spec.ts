import { getShortestPathBFS } from '../getShortestPathBFS';

describe('#getShortestPathBFS', () => {
  describe('From A to H', () => {
    it('returns the shorest path', () => {
      const path = getShortestPathBFS('A', 'H');
      expect(path).toMatchInlineSnapshot(`
[
  "A",
  "H",
]
`);
    });
  });
});
