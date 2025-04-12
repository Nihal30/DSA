// Longest Substring Without Repeating Characters

// Given a string, S. Find the length of the longest substring without repeating characters.

// Examples:
// Input : S = "abcddabac"
// Output : 4
// Explanation : The answer is "abcd" , with a length of 4.

// Brute generating all the substring using 2 loop

class Solution {
  longestNonRepeatingSubstring(s) {
    let n = s.length;
    let maxLen = 0;

    for (let i = 0; i < n; i++) {
      let hash = new Array(256).fill(0);
      for (let j = i; j < n; j++) {
        if (hash[s.charCodeAt(j)] === 1) break;

        hash[s.charCodeAt(j)] = 1;

        let len = j - i + 1;
        maxLen = Math.max(maxLen, len);
      }
    }
    return maxLen;
  }
}

let input = "cadbzabcd";

//Create an instance of Solution class
let sol = new Solution();

let len = sol.longestNonRepeatingSubstring(input);

// Print the result
console.log("Length of longest substring without repeating characters: " + len);
