// Palindrome partitioning
// Given a string s partition string s such that every substring of partition is palindrome. 
// Return all possible palindrome partition of string s.

// Input : s = "aabaa"
// Output : [ [ "a", "a", "b", "a", "a"] , [ "a", "a", "b", "aa"] , [ "a", "aba", "a"] , [ "aa", "b", "a", "a"] , [ "aa", "b", "aa" ] , [ "aabaa" ] ]
// Explanation : Above all are the possible ways in which the string can be partitioned so that each substring is a palindrome.

class Solution {
    partition(s) {
        // Resultant array to store all partitions
        const res = [];
        // Temporary array to store the current partition
        const path = [];
        // Start the depth-first search from index 0
        this.dfs(0, s, path, res);
        return res;
    }

    dfs(index, s, path, res) {
        // If the index reaches the end of the string
        if (index === s.length) {
            // Add the current partition to the result
            res.push([...path]);
            return;
        }
        // Iterate over the substring starting from 'index'
        for (let i = index; i < s.length; ++i) {
            // Check if the substring s[index..i] is a palindrome
            if (this.isPalindrome(s, index, i)) {
                // If true, add it to the current path
                path.push(s.substring(index, i + 1));
                // Recur for the remaining substring
                this.dfs(i + 1, s, path, res);
                // Backtrack: remove the last added substring
                path.pop();
            }
        }
    }

    isPalindrome(s, start, end) {
        // Check if the substring s[start..end] is a palindrome
        while (start <= end) {
            // If characters do not match, it's not a palindrome
            if (s[start++] !== s[end--]) {
                return false;
            }
        }
        return true; // Otherwise, it's a palindrome
    }
}

// Main method for testing
const solution = new Solution();
const s = "aab";
const result = solution.partition(s);
result.forEach(partition => {
    console.log(partition);
});
