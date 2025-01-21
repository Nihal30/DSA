// Given an array of integers nums and an integer target. Return the indices(0 - indexed)
//  of two elements in nums such that they add up to target.
// Each input will have exactly one solution, and the same element cannot be used twice. Return the answer in non-decreasing order.
// Input: nums = [1, 6, 2, 10, 3], target = 7
// Output: [0, 1]
// Explanation: nums[0] + nums[1] = 1 + 6 = 7

// brute

// class Solution {
//     /* Function to find two indices in the array `nums`
//        such that their elements sum up to `target`.
//     */
//     twoSum(nums, target) {
        
//         const n = nums.length;
//         //create ans array to store ans
//         let ans = [0, 0];
        
//         for (let i = 0; i < n; i++) {
//             for (let j = i + 1; j < n; j++) {
                
//                  /* if nums[i] + nums[j] is equal to 
//                    target put i and j in ans */
//                 if (nums[i] + nums[j] === target) {
//                     ans[0] = i;
//                     ans[1] = j;
//                     return ans;
//                 }
                
//             }
//         }
        
//         //Return {-1, -1} if no such pair is found
//         return [-1, -1];
//     }
// }

// const nums = [2, 6, 5, 8, 11];
// const target = 14;

// // Create an instance of the Solution class
// const sol = new Solution();

// // Call the twoSum method to find the indices
// const ans = sol.twoSum(nums, target);

// console.log(`This is the answer: [${ans[0]}, ${ans[1]}]`);


// tc = O(n^2)
// sc = O(n)

// optimal

class Solution {
    /* Function to find two indices in the array `nums`
       such that their elements sum up to `target`.
    */
    twoSum(nums, target) {
        // Size of the nums array
        let n = nums.length;
        
        // Array to store indices of two numbers
        let ans = [-1, -1];
        
        // 2D array to store [element, index] pairs
        let eleIndex = [];
        for (let i = 0; i < nums.length; i++) {
            eleIndex.push([nums[i], i]);
        }
        
        /* Sort eleIndex by the first
        element in ascending order*/
        eleIndex.sort((a, b) => a[0] - b[0]);

        /* Two pointers: one starting
        from left and one from right*/
        let left = 0, right = n - 1;

        while (left < right) {
            /* Calculate sum of elements 
            at left and right pointers*/
            let sumVal = eleIndex[left][0] + eleIndex[right][0];

            if (sumVal === target) {
                
                /* If sum equals target,
                store indices and return*/
                ans[0] = eleIndex[left][1];
                ans[1] = eleIndex[right][1];
                return ans;
                
            } else if (sumVal < target) {
                
                /* If sum is less than target,
                move left pointer to the right*/
                left++;
                
            } else {
                
                /* If sum is greater than target,
                move right pointer to the left*/
                right--;
            }
        }

        // If no such pair found, return [-1, -1]
        return ans;
    }
}

// Main function to test the solution
let nums = [2, 6, 5, 8, 11];
let target = 14;

// Create an instance of Solution class
let sol = new Solution();

let ans = sol.twoSum(nums, target);

// Print the result
console.log(`Indices of the two numbers that sum up to ${target} are: [${ans[0]}, ${ans[1]}]`);
