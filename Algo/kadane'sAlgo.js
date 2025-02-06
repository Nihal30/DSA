// Kadane's Algorithm

// Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.
// A subarray is a contiguous non-empty sequence of elements within an array.

class Solution {
    // Function to find maximum sum of subarrays
    maxSubArray(nums) {
        
        // maximum sum
        let maxi = -Infinity; 
        
        // current sum of subarray
        let sum = 0; 
        
        // Iterate through the array
        for (let i = 0; i < nums.length; i++) {
            
            // Add current element to the sum
            sum += nums[i]; 
            
            // Update maxi if current sum is greater
            if (sum > maxi) {
                maxi = sum; 
            }
            
            // Reset sum to 0 if it becomes negative
            if (sum < 0) {
                sum = 0; 
            }
        }
        
        // Return the maximum subarray sum found
        return maxi;
    }
}

function main() {
    let arr = [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ];

    // Create an instance of Solution class
    let sol = new Solution();

    let maxSum = sol.maxSubArray(arr);

    // Print the max subarray sum
    console.log("The maximum subarray sum is: " + maxSum);
}

// Execute the main function
main();
