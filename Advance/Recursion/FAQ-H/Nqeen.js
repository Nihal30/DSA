// N Queen
// The challenge of arranging n queens on a n × n chessboard so that no two queens attack 
// one another is known as the "n-queens puzzle."

// Return every unique solution to the n-queens puzzle given an integer n.
//  The answer can be returned in any sequence.

// Every solution has a unique board arrangement for the placement of the n-queens,
//  where 'Q' and '.' stand for a queen and an empty space, respectively.

// Input : n = 4
// Output : [[".Q.." , "...Q" , "Q..." , "..Q."] , ["..Q." , "Q..." , "...Q" , ".Q.."]]
// Explanation : There are two possible combinations as shown below.

// Input : n = 1
// Output:
// [["Q"]]

class Solution {
    // Check if it's safe to place a queen at board[row][col]
    safe(board, row, col) {
        let r = row, c = col;

        // Check upper left diagonal
        while (r >= 0 && c >= 0) {
            if (board[r][c] === 'Q') return false;
            r--;
            c--;
        }

        // Reset to the original position
        r = row;
        c = col;

        // Check left side
        while (c >= 0) {
            if (board[r][c] === 'Q') return false;
            c--;
        }

        // Reset to the original position
        r = row;
        c = col;

        // Check lower left diagonal
        while (r < board.length && c >= 0) {
            if (board[r][c] === 'Q') return false;
            r++;
            c--;
        }

        // If no queens are found, it's safe
        return true;
    }

    // Function to place queens on the board
    func(col, ans, board) {
        // If all columns are filled, add the solution to the answer
        if (col === board.length) {
            ans.push([...board]);
            return;
        }

        // Try placing a queen in each row for the current column
        for (let row = 0; row < board.length; row++) {
            // Check if it's safe to place a queen
            if (this.safe(board, row, col)) {
                // Place the queen
                let charArray = board[row].split('');
                charArray[col] = 'Q';
                board[row] = charArray.join('');
                
                // Recursively place queens in the next columns
                this.func(col + 1, ans, board);
                
                // Remove the queen and backtrack
                charArray[col] = '.';
                board[row] = charArray.join('');
            }
        }
    }

    // Solve the N-Queens problem
    solveNQueens(n) {
        // List to store the solutions
        const ans = [];
        // Initialize the board with empty cells
        const board = Array(n).fill('.'.repeat(n));

        // Start placing queens from the first column
        this.func(0, ans, board);
        return ans;
    }
}

// Main method to test the solution
const solution = new Solution();
const n = 4; // Example with 4 queens
const solutions = solution.solveNQueens(n);

// Print all solutions
for (const sol of solutions) {
    for (const row of sol) {
        console.log(row);
    }
    console.log();
}
