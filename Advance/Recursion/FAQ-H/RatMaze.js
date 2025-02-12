// Rat in a Maze
// Given a grid of dimensions n x n. A rat is placed at coordinates (0, 0) and wants to 
// reach at coordinates (n-1, n-1).Find all possible paths that rat can take to travel 
// from (0, 0) to (n-1, n-1). The directions in which rat can move are 'U' (up) , 'D' (down) , 'L' (left) , 'R' (right).

// The value 0 in grid denotes that the cell is blocked and rat cannot use that cell 
// for travelling, whereas value 1 represents that rat can travel through the cell. 
// If the cell (0, 0) has 0 value, then mouse cannot move to any other cell.

// Input : n = 4 , grid = [ [1, 0, 0, 0] , [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1] ]
// Output : [ "DDRDRR" , "DRDDRR" ]
// Explanation : The rat has two different path to reach (3, 3).
// The first path is (0, 0) => (1, 0) => (2, 0) => (2, 1) => (3, 1) => (3, 2) => (3, 3).
// The second path is (0,0) => (1,0) => (1,1) => (2,1) => (3,1) => (3,2) => (3,3).

class Solution {
    constructor() {
        this.result = [];
    }

    // Recursive function to find paths
    path(m, x, y, dir, n) {
        // If destination is reached, add path to result
        if (x === n - 1 && y === n - 1) {
            this.result.push(dir);
            return;
        }

        // If cell is blocked, return
        if (m[x][y] === 0) return;

        // Mark cell as visited by setting it to 0
        m[x][y] = 0;

        // Move up if possible
        if (x > 0) this.path(m, x - 1, y, dir + 'U', n);
        // Move left if possible
        if (y > 0) this.path(m, x, y - 1, dir + 'L', n);
        // Move down if possible
        if (x < n - 1) this.path(m, x + 1, y, dir + 'D', n);
        // Move right if possible
        if (y < n - 1) this.path(m, x, y + 1, dir + 'R', n);

        // Unmark cell as visited by setting it to 1
        m[x][y] = 1;
    }

    findPath(grid) {
        const n = grid.length;
        this.result = [];

        // If starting or ending cell is blocked, return empty result
        if (grid[0][0] === 0 || grid[n - 1][n - 1] === 0) return this.result;

        // Start finding paths from (0, 0)
        this.path(grid, 0, 0, "", n);

        // Sort the result paths
        this.result.sort();

        return this.result;
    }
}

// Example usage
const sol = new Solution();
const grid = [
    [1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [0, 1, 0, 0, 1],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 1]
];

const paths = sol.findPath(grid);

for (const path of paths) {
    console.log(path);
}
