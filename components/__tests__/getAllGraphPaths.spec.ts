import { getAllGraphPaths } from '../getAllGraphPaths';

describe('#getAllGraphPaths', () => {
  describe('From A to H', () => {
    it('returns all the paths', () => {
      const paths = getAllGraphPaths('A', 'H');
      expect(paths).toMatchInlineSnapshot(`
[
  [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
  ],
  [
    "A",
    "B",
    "C",
    "D",
    "E",
    "H",
  ],
  [
    "A",
    "B",
    "C",
    "F",
    "E",
    "H",
  ],
  [
    "A",
    "B",
    "C",
    "F",
    "G",
    "H",
  ],
  [
    "A",
    "B",
    "D",
    "C",
    "F",
    "E",
    "H",
  ],
  [
    "A",
    "B",
    "D",
    "C",
    "F",
    "G",
    "H",
  ],
  [
    "A",
    "B",
    "D",
    "E",
    "F",
    "G",
    "H",
  ],
  [
    "A",
    "B",
    "D",
    "E",
    "H",
  ],
  [
    "A",
    "D",
    "B",
    "C",
    "F",
    "E",
    "H",
  ],
  [
    "A",
    "D",
    "B",
    "C",
    "F",
    "G",
    "H",
  ],
  [
    "A",
    "D",
    "C",
    "F",
    "E",
    "H",
  ],
  [
    "A",
    "D",
    "C",
    "F",
    "G",
    "H",
  ],
  [
    "A",
    "D",
    "E",
    "F",
    "G",
    "H",
  ],
  [
    "A",
    "D",
    "E",
    "H",
  ],
  [
    "A",
    "H",
  ],
]
`);
    });
  });
});
