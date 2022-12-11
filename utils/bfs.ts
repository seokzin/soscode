/**
 * Breadth-first search
 * @param graph - Graph to search
 * @param node - Node to start search from
 * @returns Visited nodes
 */

const bfs = (graph: { [key: string]: string[] }, node: string) => {
  const queue = [node];
  const visited = [];

  while (queue.length > 0) {
    const current = queue.shift();
    if (!visited.includes(current)) {
      visited.push(current);
      queue.push(...graph[current]);
    }
  }

  return visited;
};

export default bfs;
