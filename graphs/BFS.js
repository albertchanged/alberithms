class Graph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    this.adjList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjList[vertex1].push(vertex2);
  }
  bfs(vertex) {
    let result = [];
    // Initialize queue array
    let queue = [];
    // Push initial vertex to queue
    queue.push(vertex);
    // Initialize visited array
    let visited = [];
    // Set vertex's value in visited to true
    visited[vertex] = true;
    // While queue is not empty
    while (queue.length) {
      // Set vertex to queue.shift
      vertex = queue.shift();
      // Push it to result
      result.push(vertex);
      // Iterate through neighboring nodes of vertex
      for (let node of this.adjList[vertex]) {
        // If the node has not been visited
        if (!visited[node]) {
          // Set its value in visited to true
          visited[node] = true;
          // Push it to queue
          queue.push(node);
        }
      }
    }
    return result;
  }
}

const graph = new Graph;
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('E', 'C');

console.log(graph.bfs('A')); // A B D E C

// console.log(JSON.stringify(graph, null, 2));