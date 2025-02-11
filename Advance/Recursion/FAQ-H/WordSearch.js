// Word Search

// Given a grid of n x m dimension grid of characters board and a string word.
// The word can be created by assembling the letters of successively surrounding cells,
//  whether they are next to each other vertically or horizontally. It is forbidden to use the same letter cell more than once.

// Return true if the word exists in the grid otherwise false.

// Input : board = [ ["A", "B", "C", "E"] , ["S" ,"F" ,"C" ,"S"] , ["A", "D", "E", "E"] ] , word = "ABCCED"
// Output : true

class Solution {
    // Helper function to check if the word exists starting from cell (i, j)
    func(board, i, j, word, k) {
        // If all characters of the word are found
        if (k === word.length) {
            return true;
        }
        // Boundary conditions and character mismatch check
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || word[k] !== board[i][j]) {
            return false;
        }

        // Temporarily mark the cell as visited
        let temp = board[i][j];
        board[i][j] = ' ';

        // Check all four possible directions (down, up, right, left)
        let ans = this.func(board, i + 1, j, word, k + 1) ||
                  this.func(board, i - 1, j, word, k + 1) ||
                  this.func(board, i, j + 1, word, k + 1) ||
                  this.func(board, i, j - 1, word, k + 1);

        // Restore the original character in the cell
        board[i][j] = temp;
        
        return ans;
    }

    // Main function to check if the word exists in the board
    exist(board, word) {
        // Iterate through each cell in the board
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                // If the first character matches, start the search
                if (board[i][j] === word[0]) {
                    // If the word is found, return true
                    if (this.func(board, i, j, word, 0)) {
                        return true;
                    }
                }
            }
        }
        // If the word is not found, return false
        return false;
    }
}

// Main function to test the solution
const solution = new Solution();
const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];
const word = "ABCCED";

if (solution.exist(board, word)) {
    console.log("Word found!");
} else {
    console.log("Word not found!");
}
