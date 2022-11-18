import { dfsWithStack, dfsWithRecursion } from 'utils';

describe('dfs >', () => {
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

  it('should search graph in depth-first order with stack', () => {
    const visited = dfsWithStack(graph, 'A');
    expect(visited).toEqual(['A', 'C', 'I', 'J', 'H', 'G', 'B', 'D', 'F', 'E']);
  });

  it('should search graph in depth-first order with recursion', () => {
    const visited = dfsWithRecursion(graph, 'A');
    expect(visited).toEqual(['A', 'B', 'D', 'E', 'F', 'C', 'G', 'H', 'I', 'J']);
  });
});
