// Find the smallest divisor
// Given an array of integers nums and an integer limit as the threshold value,
//  find the smallest positive integer divisor such that upon dividing all the elements of the 
//  array by this divisor, the sum of the division results is less than or equal to the threshold value.

// Each result of the division is rounded up to the nearest integer greater than or equal to that element.

// Input: nums = [1, 2, 3, 4, 5], limit = 8
// Output: 3
// Explanation: We can get a sum of 15(1 + 2 + 3 + 4 + 5) if we choose 1 as a divisor. 
// The sum is 9(1 + 1 + 2 + 2 + 3) if we choose 2 as a divisor. Upon dividing all the elements of the array 
// by 3, we get 1,1,1,2,2 respectively. Now, their sum is equal to 7 <= 8 i.e. the threshold value.
//  So, 3 is the minimum possible answer.

// LS
class Solution {
    // Function to find the smallest divisor
    smallestDivisor(nums, limit) {
        // Size of array
        let n = nums.length;

        // Find the maximum element in nums
        let maxi = Math.max(...nums);

        // Find the smallest divisor
        for (let d = 1; d <= maxi; d++) {
            let sum = 0;

            /* Calculate the sum of ceil
            (nums[i] / d) for all elements */
            for (let i = 0; i < n; i++) {
                sum += Math.ceil(nums[i] / d);
            }

            // Check if the sum is <= limit
            if (sum <= limit)
                return d;
        }

        // Return -1 if no valid divisor found
        return -1;
    }
}

let arr = [1, 2, 3, 4, 5];
let limit = 8;

// Create an object of the Solution class
let sol = new Solution();

let ans = sol.smallestDivisor(arr, limit);

// Print the result
console.log(`The minimum divisor is: ${ans}`);

