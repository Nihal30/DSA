// Generate Paranthesis
// Given an integer n.Generate all possible combinations of well-formed parentheses of length 2 x N.

// Input : n = 3
// Output : [ "((()))" , "(()())" , "(())()" , "()(())" , "()()()" ]

class Solution {
    /**
     * Generates all combinations of n pairs of balanced parentheses.
     *
     * @param {number} n The number of pairs of parentheses.
     * @returns {string[]} An array containing all valid combinations of parentheses.
     */
    generateParenthesis(n) {
        // Array to store the result
        const results = [];
        // Start the recursive generation with initial values
        this.generate('', n, n, results);
        // Sorting the results to maintain a consistent order
        return results.sort();
    }

    /**
     * A recursive helper function to generate all combinations
     * of balanced parentheses.
     *
     * @param {string} current The current string being built.
     * @param {number} open The number of open parentheses left to add.
     * @param {number} close The number of close parentheses left to add.
     * @param {string[]} results The array storing all valid combinations.
     */
    generate(current, open, close, results) {
        // Base case: if no open or close parentheses are left,
        // add the current string to the results array.
        if (open === 0 && close === 0) {
            results.push(current);
            return;
        }

        // If there are open parentheses left to add,
        // add an open parenthesis and call the function recursively.
        if (open > 0) {
            this.generate(current + '(', open - 1, close, results);
        }

        // If the number of close parentheses left is greater than
        // the number of open parentheses left, add a close parenthesis
        // and call the function recursively.
        if (close > open) {
            this.generate(current + ')', open, close - 1, results);
        }
    }
}

// Example usage:
const sol = new Solution();
const n = 3; // Example input
const result = sol.generateParenthesis(n);

console.log("All combinations of balanced parentheses for n =", n, "are:");
console.log(result.join('\n'));


