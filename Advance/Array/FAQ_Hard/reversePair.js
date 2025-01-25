// Reverse Pairs
// Given an integer array nums. Return the number of reverse pairs in the array.
// An index pair (i, j) is called a reverse pair if:

// 0 <= i < j < nums.length
// nums[i] > 2 * nums[j].

// Input: nums = [6, 4, 1, 2, 7]
// Output: 3
// Explanation: The reverse pairs are:
// (0, 2) : nums[0] = 6, nums[2] = 1, 6 > 2 * 1
// (0, 3) : nums[0] = 6, nums[3] = 2, 6 > 2 * 2
// (1, 2) : nums[1] = 4, nums[2] = 1, 4 > 2 * 1

// brute 

// class Solution {
//     /* Function to count reverse
//     pairs where a[i] > 2 * a[j]*/
//     reversePairs(nums) {
        
//         // Call countPairs with the array and its length
//         return this.countPairs(nums, nums.length); 
        
//     }

//     /* Helper function to count pairs
//     satisfying the condition a[i] > 2 * a[j]*/
//     countPairs(nums, n) {
        
//         // Initialize count of reverse pairs
//         let cnt = 0;
        
//         /* Nested loops to check each
//         pair (i, j) where i < j*/
//         for (let i = 0; i < n; i++) {
//             for (let j = i + 1; j < n; j++) {
                
//                 /* Check if the condition 
//                 a[i] > 2 * a[j] holds*/
//                 if (nums[i] > 2 * nums[j]) {
                    
//                     /* Increment count if
//                     condition is satisfied*/
//                     cnt++; 
//                 }
//             }
//         }
//         // Return the total count of reverse pairs
//         return cnt; 
//     }
// }


// const nums = [6, 4, 1, 2, 7];

// // Create an instance of the Solution class
// const sol = new Solution(); 

// const cnt = sol.reversePairs(nums); 

// // Output the result
// console.log("The number of reverse pairs is: " + cnt);

// 
