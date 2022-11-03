import { bfs } from './bfs';

describe('bfs >', () => {
  const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'G', 'H', 'I'],
    D: ['B', 'E', 'F'],
    E: ['D'],
    F: ['D'],
    G: ['C'],
    H: ['C'],
    I: ['C', 'J'],
    J: ['I'],
  };

  it('should search graph in breadth-first order', () => {
    const visited = bfs(graph, 'A');
    expect(visited).toEqual(['A', 'B', 'C', 'D', 'G', 'H', 'I', 'E', 'F', 'J']);
  });
});
