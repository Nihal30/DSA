// Sort an array of 0's 1's and 2's
// Given an array nums consisting of only 0, 1, or 2. Sort the array in non-decreasing order. 
// The sorting must be done in-place, without making a copy of the original array.

// Input: nums = [1, 0, 2, 1, 0]

// Output: [0, 0, 1, 1, 2]

// Explanation: The nums array in sorted order has 2 zeroes, 2 ones and 1 two

// Intuition
// The optimal solution is a variation of the popular Dutch National flag algorithm.

// This algorithm contains 3 pointers i.e. low, mid, and high, and 3 main rules.

// Index 0 to low -1 contains 0
// Index low to mid - 1 contains 1
// Index high +1 to sizeOfArray - 1 contains 2.

// solution
class Solution {
    // Function to sort the array containing only 0s, 1s, and 2s
    sortZeroOneTwo(nums) {
        // 3 pointers: low, mid, high
        let low = 0, mid = 0, high = nums.length - 1;
        
        while (mid <= high) {
            if (nums[mid] === 0) {
                
                /* Swap nums[low] and nums[mid], then
                move both low and mid pointers forward*/
                [nums[low], nums[mid]] = [nums[mid], nums[low]];
                low++;
                mid++;
                
            } else if (nums[mid] === 1) {
                
                // Move mid pointer forward
                mid++;
                
            } else {
                
                /* Swap nums[mid] and nums[high], 
                then move high pointer backward*/
                [nums[mid], nums[high]] = [nums[high], nums[mid]];
                high--;
                
            }
        }
    }
}

// Main function
let nums = [0, 2, 1, 2, 0, 1];

// Create an instance of Solution class
let sol = new Solution();

sol.sortZeroOneTwo(nums);

// Print the array elements after sorting
console.log("After sorting:");
console.log(nums.join(" "));
