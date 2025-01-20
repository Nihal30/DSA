// Find missing number
// Given an integer array of size n containing distinct values in the range from 0 to n (inclusive),
// return the only number missing from the array within this range.

// Input: nums = [0, 2, 3, 1, 4]
// Output: 5
// Explanation: nums contains 0, 1, 2, 3, 4 thus leaving 5 as the only missing number in the range [0, 5]

// brute  linear search
class Solution {
    // Function to find the missing number 
    missingNumber(nums) {
        // Calculate N from the size of nums
        const N = nums.length; 
        
        // Outer loop that runs from 0 to N
        for (let i = 0; i <= N; i++) {
            /* Flag variable to check 
            if an element exists*/
            let flag = 0;
            
            // Search for the element using linear search
            for (let j = 0; j < N; j++) {
                if (nums[j] === i) {
                    // i is present in the array
                    flag = 1;
                    break;
                }
            }
            
            // Check if the element is missing (flag == 0)
            if (flag === 0) return i;
        }
        
        /*  The following line will never
        execute, it is just to avoid warnings*/
        return -1;
    }
}

const nums = [0, 1, 2, 4];

// Create an instance of the Solution class
const solution = new Solution();

/* Call the missingNumber method 
to find the missing number */
const ans = solution.missingNumber(nums);

console.log("The missing number is: " + ans);