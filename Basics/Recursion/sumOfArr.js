// Given an array nums, find the sum of elements of array using recursion.

class Solution {
    // Method to calculate the sum of array
    arraySum(nums) {
        // Start from index 0
        return this.sum(nums, 0);
    }

    sum(nums, left) {
        // Base case: out of bounds
        if (left >= nums.length) {
            return 0;
        }
        // Add current element and recurse
        return nums[left] + this.sum(nums, left + 1);
    }
}

// Main method for testing
const solution = new Solution();
const nums = [1, 2, 3]; 
const result = solution.arraySum(nums); 
console.log(result); 

