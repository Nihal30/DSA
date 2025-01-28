// Search insert position
// Given a sorted array of nums consisting of distinct integers and a target value, return the index if the target is found.
//  If not, return the index where it would be if it were inserted in order.

// Input: nums = [1, 3, 5, 6], target = 5
// Output: 2
// Explanation: The target value 5 is found at index 2 in the sorted array. Hence, the function returns 2.
class Solution {
    searchInsert(nums, target) {
        let n = nums.length;
        let low = 0, high = n - 1;
        let ans = n;

        // Applying Binary Search Algorithm
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            /* If mid element is greater than 
               or equal to target, update ans 
               and search the left half */
            if (nums[mid] >= target) {
                ans = mid;
                high = mid - 1;
            } 
            // Otherwise, search the right half
            else {
                low = mid + 1;
            }
        }
        return ans;
    }
}

const nums = [1, 3, 5, 6];
const target = 5;

// Create an instance of the Solution class
const sol = new Solution();

// Find the insertion index
const ind = sol.searchInsert(nums, target);

console.log("The index is:", ind);

