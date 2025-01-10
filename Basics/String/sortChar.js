// Sort characters by frequency
// You are given a string s. Return the array of unique characters, sorted by highest to lowest occurring characters.
// If two or more characters have same frequency then arrange them in alphabetic order.
// eg
// Input : s = "tree"
// Output : ['e', 'r', 't' ]
// Explanation : The occurrences of each character are as shown below :
// e --> 2
// r --> 1
// t --> 1.
// The r and t have same occurrences , so we arrange them by alphabetic order.


class Solution {
    frequencySort(s) {
        // Frequency array for characters 'a' to 'z'
        let freq = Array(26).fill(0).map((_, i) => [0, String.fromCharCode(i + 97)]);

        // Count frequency of each character
        for (let ch of s) {
            freq[ch.charCodeAt(0) - 97][0]++;
        }

        // Sort by frequency (descending) and alphabetically (ascending)
        freq.sort((a, b) => {
            if (a[0] !== b[0]) return b[0] - a[0];
            return a[1].localeCompare(b[1]);
        });

        // Collect characters with non-zero frequency
        let result = [];
        for (let [count, char] of freq) {
            if (count > 0) result.push(char);
        }
        return result;
    }
}

// Main method to test the function
const sol = new Solution();
const s = "tree";
const result = sol.frequencySort(s);
console.log(result);
