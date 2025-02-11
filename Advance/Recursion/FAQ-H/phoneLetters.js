// Letter Combinations of a Phone Number
// Given a string consisting of digits from 2 to 9 (inclusive). 
// Return all possible letter combinations that the number can represent.

// Mapping of digits to letters is given in first example.

// Input : digits = "34"
// Output : [ "dg", "dh", "di", "eg", "eh", "ei", "fg", "fh", "fi" ]
// Explanation : The 3 is mapped with "def" and 4 is mapped with "ghi".
// So all possible combination by replacing the digits with characters are shown in output.
class Solution {
    constructor() {
        // Mapping digits to corresponding characters
        this.map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    }

    // Recursive helper function to generate combinations
    helper(digits, ans, index, current) {
        // Base case: if index reaches the end of digits
        if (index === digits.length) {
            // Add the current combination to the answer
            ans.push(current);
            return;
        }
        // Get characters corresponding to the current digit
        let s = this.map[digits[index] - '0'];
        // Loop through the corresponding characters
        for (let i = 0; i < s.length; i++) {
            // Recursively call function with next index
            // Add current character to the string
            this.helper(digits, ans, index + 1, current + s[i]);
        }
    }

    // Function to get all letter combinations for a given digit string
    letterCombinations(digits) {
        let ans = []; // Array to store results
        // Return empty array if digits string is empty
        if (digits.length === 0) return ans;
        // Initiate recursive function
        this.helper(digits, ans, 0, "");
        return ans; // Return the result
    }
}

// Main section to demonstrate the usage of the Solution class
const solution = new Solution();
const digits = "23"; // Input digits
const result = solution.letterCombinations(digits); // Get combinations

// Print the results
console.log(result);

// Complexity Analysis
// Time Complexity O(4^N * N), where n is the length of the input digits. 
// This is because each digit can map to up to 4 letters and there are n digits.

// Space Complexity: O(N), where n is the length of the input digits. This is due to the recursion stack depth