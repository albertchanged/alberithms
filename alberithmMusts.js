// ------------------------- ARRAYS ------------------------- //

// BINARY SEARCH

const binarySearchRecur = (arr, target) => {
  return binarySearchRecurHelper(arr, target, 0, arr.length - 1);
}
const binarySearchRecurHelper = (arr, target, left, right) => {
  if (left > right) {
    return -1;
  }
  let mid = left + Math.floor((right - left) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearchRecurHelper(arr, target, mid + 1, right);
  } else {
    return binarySearchRecurHelper(arr, target, left, mid);
  }
}

const binarySearchIter = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}



// ------------------------- TREES ------------------------- //

// DEPTH FIRST TRAVERSAL

const treeDFSIter = (root) => {
  let result = [];
  if (!root) {
    return;
  }
  let stack = [root];
  while (stack.length > 0) {
    let curr = stack.pop();
    result.push(curr.value);
    if (curr.right) {
      stack.push(curr.right);
    }
    if (curr.left) {
      stack.push(curr.left);
    }
  }
}
const treeDFSRecur = (root, arr = []) => {
  if (root) {
    arr.push(root.value);
    if (root.left) {
      DFSRecur(root.left, arr);
    }
    if (root.right) {
      DFSRecur(root.right, arr);
    }
  }
}

// BREADTH FIRST TRAVERSAL

const treeBFS = (root) => {
  let result = [];
  if (!root) {
    return null;
  }
  let queue = [root];
  while (queue.length > 0) {
    let curr = queue.shift();
    result.push(curr.value);
    if (curr.left) {
      queue.unshift(curr.left);
    }
    if (curr.right) {
      queue.unshift(curr.right);
    }
  }
}



// ------------------------- GRAPHS ------------------------- //

// DEPTH FIRST SEARCH

const graphDFSIter = (vertex, visited = {}) => {
  let result = [];
  let stack = [vertex];
  while (stack.length > 0) {
    let curr = stack.pop();
    result.push(curr);
    this.adjList[curr].forEach((neighbor) => {
      if (!visited[neighbor]) {
        stack.push(neighbor);
        visited[neighbor] = true;
      }
    });
  }
  return result;
}
const graphDFSRecur = (vertex, visited = {}, result = []) => {
  if (!vertex) {
    return null;
  }
  visited[vertex] = true;
  result.push(vertex);
  for (let neighbor of this.adjList[vertex]) {
    if (!visited[neighbor]) {
      graphDFSRecur(neighbor, visited, result);
    }
  }
  return result;
}

// BREADTH FIRST SEARCH

const graphBFS = (vertex) => {
  let result = [];
  let queue = [vertex];
  let visited = {};
  visited[vertex] = true;
  while (queue.length > 0) {
    let curr = queue.shift();
    result.push(curr);
    for (let neighbor of this.adjList[curr]) {
      if (!visited[neighbor]) {
        queue.unshift(neighbor);
        visited[neighbor] = true;
      }
    }
  }
  return result;
}

// DETECT CYCLE

const detectCycle = () => {
  let nodes = Object.keys(this.adjList);
  let visited = {};
  let callStack = {};
  for (let node of nodes) {
    if (this.detectCycleHelper(node, visited, callStack)) {
      return true;
    }
  }
  return false;
}
const detectCycleHelper = (vertex, visited, callStack) => {
  if (!visited[vertex]) {
    visited[vertex] = true;
    callStack[vertex] = true;
    let neighbors = this.adjList[vertex];
    for (let neighbor of neighbors) {
      if (!visited[neighbor] && this.detectCycleHelper(neighbor, visited, callStack)) {
        return true;
      } else if (callStack[neighbor]) {
        return true;
      }
    }
  }
  callStack[vertex] = false;
  return false;
}

// HAS PATH

const pathFromTo = (start, finish) => {
  let queue = [start];
  let visited = [];
  visited[start] = true;
  let nodes = [];
  while (queue.length) {
    let vertex = queue.shift();
    for (let node of this.adjList[vertex]) {
      if (!visited[node]) {
        visited[node] = true;
        queue.push(node);
        // Set its value in nodes to vertex
        nodes[node] = vertex;
      }
    }
  }
  let path = [];
  for (let key in nodes) {
    path.push(nodes[key]);
  }
  return path.join('->');
}

// MATRIX TRAVERSAL

const dirList = [ [0, 1], [0, -1], [1, 0], [-1, 0] ];

const traverseMatrix = (matrix) => {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let visited = makeMatrix(rows, cols);
  let list = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      dfs(matrix, i, j, visited, list);
    }
  }
  return list;
}
const dfs = (matrix, row, col, visited, list) => {
  let rows = matrix.length;
  let cols = matrix[0].length;
  if (visited[row][col]) {
    return;
  }
  list.push(matrix[row][col]);
  visited[row][col] = true;
  for (let dir of dirList) {
    let rowNext = row + dir[0];
    let colNext = col + dir[1];
    if (0 <= rowNext && rowNext < rows && 0 <= colNext && colNext < cols) {
      dfs(matrix, rowNext, colNext, visited, list);
    }
  }
}

// GET ALL PATHS 

const uniquePathsTopDown = (row, col) => {
  return traverseMatrix(0, 0, row, col);
}
const traverseMatrix = (row, col, rowEnd, colEnd) => {
  if (row === rowEnd - 1 && col === colEnd - 1) {
    return 1;
  }
  if (row < rowEnd - 1 && col < colEnd - 1) {
    return traverseMatrix(row + 1, col, rowEnd, colEnd) + traverseMatrix(row, col + 1, rowEnd, colEnd);
  }
  if (row < rowEnd - 1) {
    return traverseMatrix(row + 1, col, rowEnd, colEnd);
  }
  if (col < colEnd - 1) {
    return traverseMatrix(row, col + 1, rowEnd, colEnd);
  }
  return 0;
}

const uniquePathsBottomUp = (row, col) => {
  let paths = makeMatrix(row, col);
  for (let i = 0; i < row; i++) {
    paths[0][i] = 1;
  }
  for (let j = 0; j < col; j++) {
    paths[j][0] = 1;
  }
  for (let i = 1; i < col; i++) {
    for (let j = 1; j < row; j++) {
      paths[i][j] = paths[i - 1][j] + paths[i][j - 1];
    }
  }
  return paths[col - 1][row - 1];
}