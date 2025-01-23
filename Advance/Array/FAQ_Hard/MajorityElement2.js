// Majority Element-II
// Given an integer array nums of size n.
//  Return all elements which appear more than n/3 times in the array. The output can be returned in any order.

// Input: nums = [1, 2, 1, 1, 3, 2]
// Output: [1]
// Explanation: Here, n / 3 = 6 / 3 = 2.
// Therefore the elements appearing 3 or more times is : [1]
// brute 

// class Solution {
//     // Function to find majority elements in an array
//     majorityElementTwo(nums) {
//         // Size of the array
//         let n = nums.length;
        
//         // List of answers
//         let result = [];
        
//         for (let i = 0; i < n; i++) {
//             /* Checking if nums[i] is not 
//             already part of the answer */
//             if (result.length === 0 || result[0] !== nums[i]) {
//                 let cnt = 0;
//                 for (let j = 0; j < n; j++) {
//                     // counting the frequency of nums[i]
//                     if (nums[j] === nums[i]) {
//                         cnt++;
//                     }
//                 }
                
//                 // check if frequency is greater than n/3
//                 if (cnt > Math.floor(n / 3)) {
//                     result.push(nums[i]);
//                 }
//             }
            
//             // if result size is equal to 2 break out of loop
//             if (result.length === 2) {
//                 break;
//             }
//         }
        
//         // return the majority elements
//         return result;
//     }
// }

// let arr = [11, 33, 33, 11, 33, 11];

// // Create an instance of Solution class
// let sol = new Solution();

// let ans = sol.majorityElementTwo(arr);

// // Print the majority elements found
// console.log("The majority elements are: " + ans.join(" "));
