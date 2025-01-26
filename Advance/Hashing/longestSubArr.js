// Longest subarray with sum K
// Given an array nums of size n and an integer k,
//  find the length of the longest sub-array that sums up to k. If no such sub-array exists, return 0.

// Input: nums = [10, 5, 2, 7, 1, 9],  k=15
// Output: 4
// Explanation: The longest sub-array with a sum equal to 15 is [5, 2, 7, 1], which has a length of 4.
//  This sub-array starts at index 1 and ends at index 4, and the sum of its elements (5 + 2 + 7 + 1) equals 15.
//   Therefore, the length of this sub-array is 4.

// brute


class Solution {
    longestSubarray(nums, k) {
        const n = nums.length;
        let maxLength = 0;

        // starting index
        for (let startIndex = 0; startIndex < n; startIndex++) {
            // ending index
            for (let endIndex = startIndex; endIndex < n; endIndex++) {
                /* add all the elements of 
                   subarray = nums[startIndex...endIndex] */
                let currentSum = 0;
                for (let i = startIndex; i <= endIndex; i++) {
                    currentSum += nums[i];
                }

                if (currentSum === k) {
                    maxLength = Math.max(maxLength, endIndex - startIndex + 1);
                }
            }
        }
        return maxLength;
    }
}

const nums = [-1, 1, 1];
const k = 1;

// Create an instance of the Solution class
const solution = new Solution();
// Function call to get the result
const length = solution.longestSubarray(nums, k);

console.log("The length of the longest subarray is:", length);
