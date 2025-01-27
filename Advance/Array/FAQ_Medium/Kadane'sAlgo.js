// Kadane's Algorithm
// Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.
// A subarray is a contiguous non-empty sequence of elements within an array.

// Input: nums = [2, 3, 5, -2, 7, -4]
// Output: 15
// Explanation: The subarray from index 0 to index 4 has the largest sum = 15

// brute 

// class Solution {
//     // Function to find maximum sum of subarrays
//     maxSubArray(nums) {
        
//         /* Initialize maximum sum with
//         the smallest possible integer*/
//         let maxi = -Infinity;

//         // Iterate over each starting index of subarrays
//         for (let i = 0; i < nums.length; i++) {
            
//             /* Iterate over each ending index
//             of subarrays starting from i*/
//             for (let j = i; j < nums.length; j++) {
                
//                 /* Variable to store the sum
//                 of the current subarray*/
//                 let sum = 0;

//                 // Calculate the sum of subarray nums[i...j]
//                 for (let k = i; k <= j; k++) {
//                     sum += nums[k];
//                 }

//                 /* Update maxi with the maximum of its current
//                 value and the sum of the current subarray*/
//                 maxi = Math.max(maxi, sum);
                
//             }
//         }

//         // Return the maximum subarray sum found
//         return maxi;
//     }
// }

// // Main function to test the Solution class
// function main() {
//     let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

//     // Create an instance of Solution class
//     let sol = new Solution();

//     let maxSum = sol.maxSubArray(arr);

//     // Print the max subarray sum
//     console.log("The maximum subarray sum is: " + maxSum);
// }

// main();

// better

class Solution {
    // Function to find maximum sum of subarrays
    maxSubArray(nums) {
        
        /* Initialize maximum sum with
        the smallest possible integer*/
        let maxi = -Infinity; 

        // Iterate over each starting index of subarrays
        for (let i = 0; i < nums.length; i++) {
            
            /* Variable to store the sum
            of the current subarray*/
            let sum = 0; 
            
            /* Iterate over each ending index
            of subarrays starting from i*/
            for (let j = i; j < nums.length; j++) {
                
                /* Add the current element nums[j] to
                the sum i.e. sum of nums[i...j-1]*/
                sum += nums[j];

                /* Update maxi with the maximum of its current
                value and the sum of the current subarray*/
                maxi = Math.max(maxi, sum);
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




