# graph-game

## Run Program (Traversal using BFS)

```bash
npm run start
```

## Run Test

```bash
npm run test
```

---

File Strcture

```bash
tree -C -F -I 'node_modules' -I 'coverage'
```
```bash

./
├── README.md
├── jest.config.js
├── package-lock.json
├── package.json
├── src/
│   ├── components/
│   │   ├── __tests__/
│   │   │   ├── getAllGraphPaths.spec.ts
│   │   │   ├── getAllGraphPathsBFS.spec.ts
│   │   │   ├── getShortestPath.spec.ts
│   │   │   └── getShortestPathBFS.spec.ts
│   │   ├── getAllGraphPaths.ts
│   │   ├── getAllGraphPathsBFS.ts
│   │   ├── getShortestPath.ts
│   │   └── getShortestPathBFS.ts
│   ├── constants.ts
│   ├── index.ts
│   └── types.ts
└── tsconfig.json
```
