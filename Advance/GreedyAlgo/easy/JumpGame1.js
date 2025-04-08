// Jump Game - I

// Given an array of integers nums, each element in the array represents the maximum jump length at that position. 
// Initially starting at the first index of the array, determine if it is possible to reach the last index. 
// Return true if the last index can be reached, otherwise return false.

// Examples:
// Input : [2, 3, 1, 1, 4]
// Output : true
// Explanation : We can simply take Jump of 1 step at each index to reach the last index.

// Greedy Solution 

class Solution {
    // To determine if last index is reachable
    canJump(nums) {
        // Initialize maximum index
        let maxIndex = 0;

        // Iterate through each index of the array
        for (let i = 0; i < nums.length; i++) {
            /* If the current index 
               is greater than the 
               maximum reachable index
               it means we cannot move 
               forward and should 
               return false */
            if (i > maxIndex) {
                return false;
            }

            /* Update the maximum index that can be 
               reached by comparing
               the current maxIndex with the sum 
               of the current index and
               the maximum jump from that index */
            maxIndex = Math.max(maxIndex, i + nums[i]);
        }

        /* If we complete the 
           loop, it means we 
           can reach the 
           last index */
        return true;
    }
}

// Example usage
const nums = [4, 3, 7, 1, 2];

console.log("Array representing maximum jump from each index: " + nums.join(" "));

const solution = new Solution();
const ans = solution.canJump(nums);

if (ans) {
    console.log("It is possible to reach the last index.");
} else {
    console.log("It is not possible to reach the last index.");
}
