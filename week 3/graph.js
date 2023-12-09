class Graph {
      constructor() {
            this.map = new Map();
      }

      addVertex(vertex) {
            this.map.set(vertex, new Array());
      }

      insert(vertex, edge, isBiDirectional) {
            if (!this.map.has(vertex)) {
                  this.addVertex(vertex);
            }

            if (!this.map.has(edge)) {
                  this.addVertex(edge);
            }

            this.map.get(vertex).push(edge);
            if (isBiDirectional) {
                  this.map.get(edge).push(vertex);
            }
      }

      removeVertex(vertex) {
            if (this.map.has(vertex)) {
                  this.map.delete(vertex);

                  for (let [v, neighbors] of this.map) {
                        this.map.set(v, neighbors.filter((edge) => edge !== vertex));
                  }
            }
      }

      removeEdge(vertex, edge) {
            if (this.map.has(vertex) && this.map.has(edge)) {
                  this.map.set(
                        vertex,
                        this.map.get(vertex).filter((neighbor) => neighbor !== edge)
                  );

                  this.map.set(
                        edge,
                        this.map.get(edge).filter((neighbor) => neighbor !== vertex)
                  );
            }
      }

      printGraph() {
            for (let [vertex, neighbors] of this.map) {
                  console.log(`${vertex} -> ${neighbors.join(", ")}`);
            }
      }
}

// Example usage:
const graph = new Graph();

graph.insert("a", "b", true);
graph.insert("z", "c", true);
graph.insert("s", "j", true);

graph.printGraph();

console.log("After removing vertex 'z':");
graph.removeVertex("z");
graph.printGraph();

console.log("After removing edge between 'a' and 'b':");
graph.removeEdge("a", "b");
graph.printGraph();