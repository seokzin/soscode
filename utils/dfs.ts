/**
 * Depth-first search with stack
 * @param graph - Graph to search
 * @param node - Node to start search from
 * @returns Visited node list
 */

const dfsWithStack = (graph: { [key: string]: string[] }, node: string) => {
  const stack = [node];
  const visited = [];

  while (stack.length > 0) {
    const current = stack.pop();
    if (!visited.includes(current)) {
      visited.push(current);
      stack.push(...graph[current]);
    }
  }

  return visited;
};

/**
 * Depth-first search with recursion
 * @param graph - Graph to search
 * @param node - Node to start search from
 * @returns Visited node list
 */

const dfsWithRecursion = (graph: { [key: string]: string[] }, node: string) => {
  const visited = [];

  const dfs = (node) => {
    if (!visited.includes(node)) {
      visited.push(node);
      graph[node].forEach((neighbor) => dfs(neighbor));
    }
  };

  dfs(node);

  return visited;
};

export { dfsWithStack, dfsWithRecursion };
