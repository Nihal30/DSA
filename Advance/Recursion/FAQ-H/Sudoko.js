// Sudoko Solver
// Create a program that fills in the blank cells in a Sudoku puzzle to solve it.
// Every sudoku solution needs to follow to these guidelines:
// 1) In every row, the numbers 1 through 9 must appear exactly once.
// 2) In every column, the numbers 1 through 9 must appear exactly once.
// 3) In each of the grid's nine 3x3 sub-boxes, the numbers 1 through 9 must appear exactly once.

// Empty cells are indicated by the '.' character.
// Input : board = [ ["5", "3", ".", ".", "7", ".", ".", ".", "."] , ["6", ".", ".", "1", "9", "5", ".", ".", "."] , [".", "9", "8", ".", ".", ".", ".", "6", "."] , ["8", ".", ".", ".", "6", ".", ".", ".", "3"] , ["4", ".", ".", "8", ".", "3", ".", ".", "1"] , ["7", ".", ".", ".", "2", ".", ".", ".", "6"] , [".", "6", ".", ".", ".", ".", "2", "8", "."] , [".", ".", ".", "4", "1", "9", ".", ".", "5"] , [".", ".", ".", ".", "8", ".", ".", "7", "9"] ]
// Output : [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]

class Solution {
    solveSudoku(board) {
        this.solve(board);
    }

    // Recursive method to solve the Sudoku
    solve(board) {
        const n = 9;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                // Empty cell found
                if (board[i][j] === '.') {
                    for (let digit = '1'; digit <= '9'; digit++) {
                        // Check if digit can be placed
                        if (this.areRulesMet(board, i, j, digit)) {
                            // Place digit
                            board[i][j] = digit;
                            if (this.solve(board)) {
                                // Recur to place next digits
                                return true;
                            } else {
                                // Reset if placing digit doesn't solve Sudoku
                                board[i][j] = '.';
                            }
                        }
                    }
                    // If no digit can be placed, return false
                    return false;
                }
            }
        }
        // Sudoku solved
        return true;
    }

    // Method to check if placing a digit follows Sudoku rules
    areRulesMet(board, row, col, digit) {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === digit || board[i][col] === digit) {
                // Digit already in row or column
                return false;
            }
        }
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === digit) {
                    // Digit already in 3x3 sub-box
                    return false;
                }
            }
        }
        // Digit can be placed
        return true;
    }
}

// Example usage
const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

const solution = new Solution();
solution.solveSudoku(board);
console.log(board.map(row => row.join(' ')).join('\n'));

// Complexity Analysis
// Time Complexity : O(9^(N*N)), as each cell can be filled with 1 to 9 digits and there are n*n cells.

// Space Complexity O(n), where n is the depth of the recursion stack.
