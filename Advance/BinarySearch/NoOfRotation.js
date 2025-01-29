// Find out how many times the array is rotated
// Given an integer array nums of size n, sorted in ascending order with distinct values.
//  The array has been right rotated an unknown number of times, between 1 and n. Determine the number of rotations performed on the array.

// Input : nums = [4, 5, 6, 7, 0, 1, 2, 3]
// Output: 4
// Explanation: The original array should be [0, 1, 2, 3, 4, 5, 6, 7]. So, we can notice that the array has been rotated 4 times.

class Solution {
    /* Function to find the number of
       rotations in a rotated sorted array */
    findKRotation(nums) {
        let low = 0, high = nums.length - 1;
        let ans = Infinity;
        let index = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            
            /* Search space is already sorted
               then nums[low] will always be
               the minimum in that search space */
            if (nums[low] <= nums[high]) {
                if (nums[low] < ans) {
                    index = low;
                    ans = nums[low];
                }
                break;
            }
            
            // If left part is sorted update the ans
            if (nums[low] <= nums[mid]) {
                if (nums[low] < ans) {
                    index = low;
                    ans = nums[low];
                }
                // Eliminate left half
                low = mid + 1;
            } else {
                /* update the ans if it 
                is less than nums[mid] */
                if (nums[mid] < ans) {
                    index = mid;
                    ans = nums[mid];
                }
                // Eliminate right half
                high = mid - 1;
            }
        }
        // Return the index as answer
        return index;
    }
}

let nums = [4, 5, 6, 7, 0, 1, 2, 3];  

// Create an instance of Solution class
let sol = new Solution();

let ans = sol.findKRotation(nums);

// Print the result
console.log(`The array is rotated ${ans} times.`);
