// Lower Bound
// Given a sorted array of nums and an integer x, write a program to find the lower bound of x.
//  The lower bound algorithm finds the first or the smallest index in a sorted array where the value at
//   that index is greater than or equal to a given key i.e. x.
// If no such index is found, return the size of the array.

// Input : nums= [1,2,2,3], x = 2
// Output:1
// Explanation: Index 1 is the smallest index such that arr[1] >= x.

class Solution {
    // Function to find the lower bound
    lowerBound(nums, x) {
        let low = 0, high = nums.length - 1;
        let ans = nums.length;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            /* Check if mid element 
               is a potential answer */
            if (nums[mid] >= x) {
                ans = mid;

                // Search left half
                high = mid - 1;
            } 
            else {
                // Search right half
                low = mid + 1;
            }
        }
        return ans;
    }
}

// Sample array and target
const nums = [1, 2, 2, 3];
const x = 2;

// Create an instance of the Solution class
const sol = new Solution();

// Function call to find the lower bound
const ind = sol.lowerBound(nums, x);

console.log("The lower bound is the index:", ind);