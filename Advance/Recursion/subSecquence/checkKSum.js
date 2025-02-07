// Check if there exists a subsequence with sum K

// Given an array nums and an integer k. R﻿eturn true if there exist subsequences such 
// that the sum of all elements in subsequences is equal to k else false.

// Input : nums = [1, 2, 3, 4, 5] , k = 8
// Output : Yes
// Explanation : The subsequences like [1, 2, 5] , [1, 3, 4] , [3, 5] sum up to 8.

class Solution {
    // This method recursively checks for the subsequence with the given sum
    solve(i, n, arr, k) {
        // Base case: if the sum k is 0, a subsequence is found
        if (k === 0) {
            return true;
        }
        // Base case: if k is negative, no valid subsequence can be found
        if (k < 0) {
            return false;
        }
        // Base case: if all elements are processed, check if k is 0
        if (i === n) {
            return k === 0;
        }
        // Recursive call: include the current element in the subsequence
        // or exclude the current element from the subsequence
        return this.solve(i + 1, n, arr, k - arr[i]) || this.solve(i + 1, n, arr, k);
    }

    // This method initiates the recursive process
    checkSubsequenceSum(nums, target) {
        const n = nums.length; // Get the length of the input array
        return this.solve(0, n, nums, target); // Start the recursive process
    }
}

// Main function to test the solution
const sol = new Solution();
const nums = [1, 2, 3, 4];
const target = 5;
console.log(sol.checkSubsequenceSum(nums, target)); // Expected output: true
