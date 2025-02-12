// M Coloring Problem
// Given an integer M and an undirected graph with N vertices and E edges.
//  The goal is to determine whether the graph can be coloured with a maximum 
//  of M colors so that no two of its adjacent vertices have the same colour applied to them.

// In this context, colouring a graph refers to giving each vertex a different colour.
//  If the colouring of vertices is possible then return true, otherwise return false.

// Input : N = 4 , M = 3 , E = 5 , Edges = [ (0, 1) , (1, 2) , (2, 3) , (3, 0) , (0, 2) ]
// Output : true
// Explanation : Consider the three colors to be red, green, blue.
// We can color the vertex 0 with red, vertex 1 with blue, vertex 2 with green, vertex 3 with blue.
// In this way we can color graph using 3 colors at most.

class Solution {
    // Function to check if it's safe to color the node with a given color
    isSafe(col, node, colors, adj) {
        // Check adjacent nodes
        for (let neighbor of adj[node]) {
            // If an adjacent node has the same color
            if (colors[neighbor] === col) return false;
        }
        return true; // Safe to color
    }

    // Recursive function to solve graph coloring problem
    solve(node, m, n, colors, adj) {
        // If all nodes are colored
        if (n === node) return true;
        // Try all colors from 1 to m
        for (let i = 1; i <= m; i++) {
            // Check if it is safe to color the node with color i
            if (this.isSafe(i, node, colors, adj)) {
                colors[node] = i; // Assign color i to node
                // Recursively try to color the next node
                if (this.solve(node + 1, m, n, colors, adj)) return true;
                colors[node] = 0; // Reset color if it doesn't lead to a solution
            }
        }
        return false; // No color can be assigned
    }

    // Function to check if the graph can be colored with m colors
    graphColoring(edges, m, n) {
        // Create adjacency list representation of the graph
        let adj = Array.from({ length: n }, () => []);
        // Build the graph from edges
        for (let edge of edges) {
            adj[edge[0]].push(edge[1]);
            adj[edge[1]].push(edge[0]);
        }

        let colors = new Array(n).fill(0); // Initialize all colors to 0 (uncolored)
        // Start solving from the first node
        return this.solve(0, m, n, colors, adj);
    }
}

// Example usage
const sol = new Solution();
const edges = [
    [0, 1], [0, 2], [1, 2], [1, 3]
];
const m = 3; // Number of colors
const n = 4; // Number of nodes

// Check if the graph can be colored with m colors
if (sol.graphColoring(edges, m, n)) {
    console.log("The graph can be colored with " + m + " colors.");
} else {
    console.log("The graph cannot be colored with " + m + " colors.");
}
