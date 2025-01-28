// Search X in sorted array
// Given a sorted array of integers nums with 0-based indexing, find the index of a specified target integer.
//  If the target is found in the array, return its index. If the target is not found, return -1.

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: The target integer 9 exists in nums and its index is 4

class Solution {
    // Function to find the given target in a sorted array
    search(nums, target) {
        let n = nums.length; // Size of array 
        
        // Pointers to define the search space
        let low = 0, high = n - 1;

        // Until the search space is not empty
        while (low <= high) {
            // Find the middle element
            let mid = Math.floor((low + high) / 2);

            // If it matches the target
            if (nums[mid] === target) 
                return mid;
                
            // If the target is greater than middle element 
            else if (target > nums[mid]) 
                low = mid + 1;
                
            // Otherwise
            else 
                high = mid - 1;
        }

        // If the target is not found
        return -1;
    }
}

// Creating an instance of Solution class
let sol = new Solution();

// Test the function
let a = [-1, 0, 3, 5, 9, 12];
let target = 9;

// Function call to find the given target in a sorted array
let ind = sol.search(a, target);

if (ind === -1) 
    console.log("The target is not present.");
else 
    console.log("The target is at index: " + ind);