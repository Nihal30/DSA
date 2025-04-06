// Single Number - III

// Given an array nums of length n, every integer in the array appears twice except for two integers. 
// Identify and return the two integers that appear only once in the array. Return the two numbers in ascending order.
// For example, if nums = [1, 2, 1, 3, 5, 2], the correct answer is [3, 5], not [5, 3].

// Examples:
// Input : nums = [1, 2, 1, 3, 5, 2]
// Output : [3, 5]
// Explanation : The integers 3 and 5 have appeared only once.

// brute using hasing 

class Solution {
    /* Function to get the single 
    number in the given array */
    singleNumber(nums) {
        
        // Array to store the answer
        let ans = [];
        
        /* Map to store the elements 
        and their frequencies */
        let mpp = new Map();
        
        // Iterate on the array
        for (let num of nums) {
            mpp.set(num, (mpp.get(num) || 0) + 1); // Update the map
        }
        
        // Iterate on the map
        for (let [key, value] of mpp.entries()) {
            // If frequency is 1
            if (value === 1) {
                /* Add the element to
                the result array */
                ans.push(key);
            }
        }
        
        // Return the result after sorting
        ans.sort((a, b) => a - b);
        return ans;
    }
}

// Creating an instance of Solution class
let sol = new Solution();

// Function call to get the single number in the given array
let nums = [1, 2, 1, 3, 5, 2];
let ans = sol.singleNumber(nums);

console.log("The single numbers in given array are: " + ans[0] + " and " + ans[1]);

// 
