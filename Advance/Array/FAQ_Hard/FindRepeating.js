// Find the repeating and missing number

// Given an integer array nums of size n containing values from [1, n] and 
// each value appears exactly once in the array, except for A, which appears twice and B which is missing.
// Return the values A and B, as an array of size 2, where A appears in the 0-th index and B in the 1st index.

// Input: nums = [3, 5, 4, 1, 1]
// Output: [1, 2]
// Explanation: 1 appears two times in the array and 2 is missing from nums

// brute
class Solution {
    // Function to find repeating and missing numbers
    findMissingRepeatingNumbers(nums) {
        
        // Size of the array
        let n = nums.length; 
        let repeating = -1, missing = -1;

        // Find the repeating and missing number:
        for (let i = 1; i <= n; i++) {
            
            // Count the occurrences:
            let cnt = 0;
            for (let j = 0; j < n; j++) {
                if (nums[j] === i) {
                    cnt++;
                }
            }

            // Check if i is repeating or missing
            if (cnt === 2) {
                repeating = i;
            } else if (cnt === 0) {
                missing = i;
            }

            /* If both repeating and missing 
            are found, break out of loop*/
            if (repeating !== -1 && missing !== -1) {
                break;
            }
        }

        // Return [repeating, missing]
        return [repeating, missing];
    }
}

const nums = [3, 1, 2, 5, 4, 6, 7, 5];

// Create an instance of Solution class
const sol = new Solution();

const result = sol.findMissingRepeatingNumbers(nums);

// Print the repeating and missing numbers found
console.log(`The repeating and missing numbers are: {${result[0]}, ${result[1]}}`);
