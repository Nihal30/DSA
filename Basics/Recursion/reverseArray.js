// Reverse an array
// Given an array nums of n integers, return reverse of the array.

// Input : nums = [1, 2, 3, 4, 5]
// Output : [5, 4, 3, 2, 1]

class Solution {
    // Method to reverse the array
    reverseArray(nums) {
        // Call the helper function to reverse the array
        this.reverse(nums, 0, nums.length - 1);  
        // Return the reversed array
        return nums;  
    }

    // Helper method to reverse the array using recursion
    reverse(nums, left, right) {
        if (left >= right) {
            return;  
        }
        // Swap the elements
        [nums[left], nums[right]] = [nums[right], nums[left]];  
        // Recursive call with updated pointers
        this.reverse(nums, left + 1, right - 1);  
    }
}

// Main method for testing the reverseArray function
const solution = new Solution();
const nums = [1, 2, 3, 4, 5]; 
const result = solution.reverseArray(nums);  
console.log(result);  
