// Leaders in an Array
// Given an integer array nums, return a list of all the leaders in the array.
// A leader in an array is an element whose value is strictly greater than all elements to its right in the given array.
//  The rightmost element is always a leader.
//  The elements in the leader array must appear in the order they appear in the nums array.

// Input: nums = [1, 2, 5, 3, 1, 2]
// Output: [5, 3, 2]
// Explanation: 2 is the rightmost element, 3 is the largest element in the index range [3, 5], 5 is the largest element in the index range [2, 5]

// brute 

// class Solution {
//     // Function to find leaders in an array.
//     leaders(nums) {
//         let ans = [];

//         // Iterate through each element in nums
//         for (let i = 0; i < nums.length; i++) {
//             let leader = true;

//             /* Check whether nums[i] is greater
//             than all elements to its right */
//             for (let j = i + 1; j < nums.length; j++) {
//                 if (nums[j] >= nums[i]) {
//                     /* If any element to the right is greater 
//                     or equal, nums[i] is not a leader */
//                     leader = false;
//                     break;
//                 }
//             }

//             // If nums[i] is a leader, add it to the ans array
//             if (leader) {
//                 ans.push(nums[i]);
//             }
//         }

//         // Return the leaders
//         return ans;
//     }
// }

// // Main method
// let nums = [1, 2, 5, 3, 1, 2];

// // Create an instance of the Solution class
// let finder = new Solution();

// // Get leaders using class method
// let ans = finder.leaders(nums);

// console.log("Leaders in the array are: " + ans.join(" "));

// optimal 

class Solution {
    // Function to find the leaders in an array.
    leaders(nums) {
        let ans = [];
        
        if (nums.length === 0) {
            return ans;
        }
        
        // Last element of the array is always a leader
        let max = nums[nums.length - 1];
        ans.push(nums[nums.length - 1]);
        
        // Check elements from right to left
        for (let i = nums.length - 2; i >= 0; i--) {
            if (nums[i] > max) {
                ans.push(nums[i]);
                max = nums[i];
            }
        }
        
        /* Reverse the array to match
        the required output order */
        ans.reverse();
        
        // Return the leaders
        return ans;
    }
}

// Main method
let nums = [10, 22, 12, 3, 0, 6];

// Create an instance of the Solution class
let finder = new Solution();

// Get leaders using class method
let ans = finder.leaders(nums);

console.log("Leaders in the array are: " + ans.join(" "));