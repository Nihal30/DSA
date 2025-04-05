// // Given an array nums where each integer in nums appears thrice except one. Find out the number that has appeared only once.

// // Examples:
// // Input : nums = [2, 2, 2, 3]
// // Output : 3
// // Explanation : The integers 3 has appeared only once.


// // brute  using mpp
// class Solution {
//     /* Function to get the single 
//     number in the given array */
//     singleNumber(nums) {
        
//         /* Map to store the elements 
//         and their frequencies */
//         let mpp = new Map();
        
//         // Iterate on the array
//         for (let i = 0; i < nums.length; i++) {
//             mpp.set(nums[i], (mpp.get(nums[i]) || 0) + 1); // Update the map
//         }
        
//         // Iterate on the map
//         for (let [key, value] of mpp.entries()) {
//             // If frequency is 1
//             if (value === 1) {
//                 // Return the element
//                 return key;
//             }
//         }
        
//         /* Return -1, if there is no 
//         number having frequency 1 */
//         return -1;
//     }
// }

// // Test the function
// let nums = [2, 2, 2, 3];

// /* Creating an instance of 
// Solution class */
// let sol = new Solution();

// /* Function call to get the single 
// number in the given array */
// let ans = sol.singleNumber(nums);

// console.log("The single number in given array is: " + ans);

// // Complexity Analysis:
// // Time Complexity: O(N) (where N is the size of the array) –

// // Traversing the array to update the Hash Map - O(N).
// // Traversing on the map - O(N) (in worst case).
// // Space Complexity: O(N) – Using a hashmap data structure and in the worst-case
// //  (when all elements in the array are unique), it will store N key-value pairs.


optimal using Bit 

class Solution {
    singleNumber(nums) {
        // Two buckets
        let ones = 0, twos = 0;

        // Traverse the array 
        for (let i = 0; i < nums.length; i++) {
            // Add the number to Ones, if it is not in Twos
            ones = (ones ^ nums[i]) & ~twos;

            // Add the number to Twos, if it is already in Ones
            twos = (twos ^ nums[i]) & ~ones;
        }

        return ones;
    }
}

// Main function
const nums = [1, 0, 3, 0, 1, 1, 3, 3, 10, 0];

// Creating an instance of Solution class
const sol = new Solution();

// Function call to find the number that appears only once
const ans = sol.singleNumber(nums);

console.log("The single number(II) is:", ans);

// Complexity Analysis:
// Time Complexity: O(N), where N is the number of elements in the array
// Traversing the array once takes linear time.

// Space Complexity: O(1), as only a couple of variables are used.
