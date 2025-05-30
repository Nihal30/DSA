// Given an integer array nums, determine the range of a subarray, defined as 
// the difference between the largest and smallest elements within the subarray. 
// Calculate and return the sum of all subarray ranges of nums.
// A subarray is defined as a contiguous, non-empty sequence of elements within the array.

// Examples:
// Input: nums = [1, 2, 3]
// Output: 4
// Explanation: The 6 subarrays of nums are the following:
// [1], range = largest - smallest = 1 - 1 = 0 
// [2], range = 2 - 2 = 0
// [3], range = 3 - 3 = 0
// [1,2], range = 2 - 1 = 1
// [2,3], range = 3 - 2 = 1
// [1,2,3], range = 3 - 1 = 2
// So the sum of all ranges is 0 + 0 + 0 + 1 + 1 + 2 = 4.

// brute generating all the subarray and keep the track of smallest and largest

class Solution {

    /* Function to find the sum of 
    subarray ranges in each subarray */
    subArrayRanges(arr) {
        
        // Size of array
        const n = arr.length;
        
        // To store the sum
        let sum = 0;
        
        // Traverse on the array
        for (let i = 0; i < n; i++) {
            
            // To store the smallest value of subarray
            let smallest = arr[i];
            
            // To store the largest value of subarray
            let largest = arr[i];
            
            /* Nested loop to get all 
            subarrays starting from index i */
            for (let j = i; j < n; j++) {
                
                // Update the smallest value
                smallest = Math.min(smallest, arr[j]);
                
                // Update the largest value
                largest = Math.max(largest, arr[j]);
                
                // Update the sum
                sum += (largest - smallest);
            }
        }
        
        // Return the computed sum
        return sum;
    }
}

// Main function to test the solution
const arr = [1, 2, 3];

/* Creating an instance of 
Solution class */
const sol = new Solution(); 

/* Function call to find the sum of 
subarray ranges in each subarray */
const ans = sol.subArrayRanges(arr);

console.log("The sum of subarray ranges is:", ans);
