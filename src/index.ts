import { getAllGraphPathsBFS } from './components/getAllGraphPathsBFS';
import { getShortestPathBFS } from './components/getShortestPathBFS';

const pathsBFS = getAllGraphPathsBFS('A', 'H');
pathsBFS.map((path) => console.log(`The path is ${path} by BFS`));

const shortestPathBSF = getShortestPathBFS('A', 'H');
console.log(`The shortest path is ${shortestPathBSF} by BFS`);
