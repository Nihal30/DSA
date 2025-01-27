// Maximum Product Subarray in an Array
// Given an integer array nums. Find the subarray with the largest product,
//  and return the product of the elements present in that subarray.
// A subarray is a contiguous non-empty sequence of elements within an array.

// Input: nums = [4, 5, 3, 7, 1, 2]
// Output: 840
// Explanation: The largest product is given by the whole array itself


// brute 

// class Solution {
//     // Function to find the maximum product subarray
//     maxProduct(nums) {
//         //Initialize result to minimum possible integer
//         let result = Number.MIN_SAFE_INTEGER;

//         // Iterate through all subarrays using two nested loops
//         for (let i = 0; i < nums.length - 1; i++) {
//             for (let j = i + 1; j < nums.length; j++) {
//                 let prod = 1;

//                 // Calculate product of subarray 
//                 for (let k = i; k <= j; k++) {
//                     prod *= nums[k];
//                 }

//                 // Update the result with maximum product found
//                 result = Math.max(result, prod);
//             }
//         }

//         // Return the maximum product found 
//         return result;
//     }

//     static main() {
//         const nums = [4, 5, 3, 7, 1, 2];

//         // Create an instance of Solution class
//         let sol = new Solution();

//         let maxProd = sol.maxProduct(nums);

//         // Print the result
//         console.log("The maximum product subarray:", maxProd);
//     }
// }

// // Call the main function to test the Solution class
// Solution.main();

// better

class Solution {
    /* Function to find maximum product subarray */
    maxProduct(nums) {
        // Initialize result with first element of nums
        let result = nums[0];

        /* Iterate through each element
        as a starting point of subarray */
        for (let i = 0; i < nums.length; i++) {
            
            // Initialize p with nums[i]
            let p = nums[i];

            /* Iterate through subsequent elements
            to form subarrays starting from nums[i] */
            for (let j = i + 1; j < nums.length; j++) {
                
                /* Update result with the
                max of current result and p */
                result = Math.max(result, p);

                // Update p by multiplying with nums[j]
                p *= nums[j];
            }

            // Update result for subarray ending at nums[i]
            result = Math.max(result, p);
        }

        // Return maximum product subarray found
        return result;
    }

    static main() {
        const nums = [4, 5, 3, 7, 1, 2];

        // Create an instance of Solution class
        let sol = new Solution();

        let maxProd = sol.maxProduct(nums);

        // Print the result
        console.log("The maximum product subarray:", maxProd);
    }
}

// Call the main function to test the Solution class
Solution.main();




