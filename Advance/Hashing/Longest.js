// Longest Consecutive Sequence in an Array
// Given an array nums of n integers,
//  return the length of the longest sequence of consecutive integers. The integers in this sequence can appear in any order.
// Input: nums = [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest sequence of consecutive elements in the array is [1, 2, 3, 4], which has a length of 4.
//  This sequence can be formed regardless of the initial order of the elements in the array.
// brute 

class Solution {
    // Helper function to perform linear search
    linearSearch(nums, num) {
        const n = nums.length;
        // Traverse through the array
        for (let i = 0; i < n; i++) {
            if (nums[i] === num)
                return true;
        }
        return false;
    }

    longestConsecutive(nums) {
        // If the array is empty
        if (nums.length === 0) {
            return 0;
        }
        const n = nums.length;
        // Initialize the longest sequence length
        let longest = 1;

        // Iterate through each element in the array
        for (let i = 0; i < n; i++) {
            // Current element
            let x = nums[i];
            // Count of the current sequence
            let cnt = 1;

            // Search for consecutive numbers
            while (this.linearSearch(nums, x + 1)) {
                // Move to the next number in the sequence
                x += 1;
                // Increment the count of the sequence
                cnt += 1;
            }

            // Update the longest sequence length found so far
            longest = Math.max(longest, cnt);
        }
        return longest;
    }
}

const a = [100, 4, 200, 1, 3, 2];

// Create an instance of the Solution class
const solution = new Solution();

// Function call for longest consecutive sequence
const ans = solution.longestConsecutive(a);
console.log("The longest consecutive sequence is", ans);
