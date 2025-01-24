// Count subarrays with given sum
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// Input: nums = [1, 1, 1], k = 2
// Output: 2
// Explanation: In the given array [1, 1, 1], there are two subarrays that sum up to 2: [1, 1] and [1, 1]. Hence, the output is 2.

// brute 


// class Solution {
//     subarraySum(nums, k) {
//         let n = nums.length;
//         // Number of subarrays
//         let cnt = 0;

//         // starting index i
//         for (let i = 0; i < n; i++) {
//             // ending index j
//             for (let j = i; j < n; j++) {

//                 // calculate the sum of subarray [i...j]
//                 let sum = 0;
//                 for (let K = i; K <= j; K++)
//                     sum += nums[K];

//                 // Increase the count if sum == k:
//                 if (sum == k)
//                     cnt++;
//             }
//         }
//         return cnt;
//     }
// }

// const solution = new Solution();
// const nums = [3, 1, 2, 4];
// const k = 6;
// // Function call to find the result
// const cnt = solution.subarraySum(nums, k);
// console.log("The number of subarrays is:", cnt);

// better


class Solution {
    subarraySum(nums, k) {
        let n = nums.length;
        // Number of subarrays
        let count = 0;

        // starting index
        for (let startIndex = 0; startIndex < n; startIndex++) {
            let currentSum = 0;
            // ending index
            for (let endIndex = startIndex; endIndex < n; endIndex++) {
                // calculate the sum of subarray [startIndex...endIndex]
                // sum of [startIndex..endIndex-1] + nums[endIndex]
                currentSum += nums[endIndex];

                // Increase the count if currentSum == k:
                if (currentSum == k)
                    count++;
            }
        }
        return count;
    }
}

const solution = new Solution();
const nums = [3, 1, 2, 4];
const k = 6;
// Function call to find the result
const count = solution.subarraySum(nums, k);
console.log("The number of subarrays is:", count);

