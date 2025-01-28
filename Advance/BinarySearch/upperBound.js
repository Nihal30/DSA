// Upper Bound
// Given a sorted array of nums and an integer x, write a program to find the upper bound of x.
//  The upper bound algorithm finds the first or the smallest index in a sorted array where the 
//  value at that index is greater than a given key i.e. x.
// If no such index is found, return the size of the array.

// Input : n= 4, nums = [1,2,2,3], x = 2
// Output:3
// Explanation: Index 3 is the smallest index such that arr[3] > x.

class Solution {
    // Function to find the upper bound
    upperBound(nums, x) {
        let low = 0, high = nums.length - 1;
        let ans = nums.length;

        // Binary search to find the upper bound
        while (low <= high) {
            // Calculate mid index
            let mid = Math.floor((low + high) / 2);

            /* Update ans if current element
               element is greater than x */
            if (nums[mid] > x) {
                ans = mid;
                high = mid - 1;
            } 
            // Otherwise, move to the right half
            else {
                low = mid + 1;
            }
        }
        return ans;
    }
}

const nums = [1, 2, 2, 3];
const x = 2;

// Create an instance of the Solution class
const sol = new Solution();

// Function call to find the upper bound
const ind = sol.upperBound(nums, x);

console.log("The upper bound is the index:", ind);