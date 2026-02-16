// Left Rotate Array by One
// Given an integer array nums, rotate the array to the left by one.

// Input: nums = [1, 2, 3, 4, 5]
// Output: [2, 3, 4, 5, 1]
// Explanation: Initially, nums = [1, 2, 3, 4, 5]
// Rotating once to left -> nums = [2, 3, 4, 5, 1]


// revision
class Solution {
    rotateArrayByOne(nums) {
        // Store the first element in a temporary variable
        const temp = nums[0];
        
        // Shift elements to the left
        for (let i = 1; i < nums.length; i++) {
            nums[i - 1] = nums[i];
        }

        // Place the first element at the end
        nums[nums.length - 1] = temp;
    }
}

// Main method for testing
const solution = new Solution();
const nums = [1, 2, 3, 4, 5];

solution.rotateArrayByOne(nums);

console.log(nums);  // Output the rotated array

// tc O(n)
// sc that we are using is O(1) and on in the algo is O(n) coz we are using the given array