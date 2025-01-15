// Linear Search
// Given an array of integers nums and an integer target,
//  find the smallest index (0 based indexing) where the target appears in the array.
//   If the target is not found in the array, return -1
// Input: nums = [2, 3, 4, 5, 3], target = 3
// Output: 1
// Explanation: The first occurence of 3 in nums is at index 1

class Solution {
    linearSearch(nums, target) {
        // Traverse the entire array
        for (let i = 0; i < nums.length; i++) {

            // Check if current element is target
            if (nums[i] === target) {

                // Return if found
                return i;

            }
        }
        // If the target is not found
        return -1;
    }
}

const nums = [1, 2, 3, 4, 5];
const target = 4;

// Create an instance of the Solution class
const sol = new Solution();

// Call the linearSearch method and store the result
const result  =  sol.linearSearch(nums, target);

console.log(result);

