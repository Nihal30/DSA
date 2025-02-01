// Check if the array is sorted
// Given an array nums of n integers, return true if the array nums is sorted in non-decreasing order or else false.

// Input : nums = [1, 2, 3, 4, 5]
// Output : true
// Explanation : For all i (1 <= i <= 4) it holds nums[i] <= nums[i+1], hence it is sorted and we return true.

class Solution {
    isSorted(nums) {
        // An array with 0 or 1 element is always considered sorted
        if (nums.length <= 1) {
            return true;
        }
        // Check if the array is sorted starting from index 0 to 1
        return this.sort(nums, 0, 1);
    }

    sort(nums, left, right) {
        // If we reach the end of the array
        // it means the array is sorted
        if (right >= nums.length) {
            return true;
        }
        // If we find a pair where the left element is greater than the right
        // the array is not sorted
        if (nums[left] > nums[right]) {
            return false;
        }
        // Move to the next pair of elements
        return this.sort(nums, left + 1, right + 1);
    }
}

// Main method for testing the isSorted function
const solution = new Solution();
const nums = [1, 2, 3, 4, 5]; 
const result = solution.isSorted(nums); 
console.log(result ? "Array is sorted" : "Array is not sorted"); 

