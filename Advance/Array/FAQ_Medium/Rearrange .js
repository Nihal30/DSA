// Rearrange array elements by sign
// Given an integer array nums of even length consisting of an equal number of positive and negative integers.
// Return the answer array in such a way that the given conditions are met:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.

// Input : nums = [2, 4, 5, -1, -3, -4]
// Output : [2, -1, 4, -3, 5, -4]
// Explanation: The positive number 2, 4, 5 maintain their relative positions and -1, -3, -4 maintain their relative positions

// brute
// class Solution {
//     // Function to rearrange the given array by signs
//     rearrangeArray(nums) {
//         /* Define 2 vectors, one for storing positive 
//         and other for negative elements of the array.*/
//         let pos = [];
//         let neg = [];
  
//         // Segregate the array into positives and negatives.
//         nums.forEach(num => {
//             if (num > 0) pos.push(num);
//             else neg.push(num);
//         });
  
//         // Positives on even indices, negatives on odd.
//         for (let i = 0; i < nums.length / 2; i++) {
//             nums[2 * i] = pos[i];
//             nums[2 * i + 1] = neg[i];
//         }
        
//         // Return the result
//         return nums;
//     }
// }
// const A = [1, 2, -4, -5];

// // Create an instance of Solution class
// const sol = new Solution();

// const ans = sol.rearrangeArray(A);

// // Print the result
// console.log(ans.join(" "));

// 
