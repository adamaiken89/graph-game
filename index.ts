import { getAllGraphPaths } from './components/getAllGraphPaths';
import { getShortestPath } from './components/getShortestPath';

const paths = getAllGraphPaths('A', 'H');
paths.map((path) => console.log(`The path is ${path}`));

const shortestPath = getShortestPath('A', 'H');
console.log(`The shortest path is ${shortestPath}`);
