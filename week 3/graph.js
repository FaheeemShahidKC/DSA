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

      printGraph() {
            for (let [vertex, neighbors] of this.map) {
                  console.log(`${vertex} -> ${neighbors.join(", ")}`);
            }
      }
}

const graph = new Graph();

graph.insert("a", "b", true);
graph.insert("z", "c", true);
graph.insert("s", "j", true);
graph.printGraph();