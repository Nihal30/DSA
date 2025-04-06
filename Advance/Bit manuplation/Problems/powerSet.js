// Power Set Bit Manipulation
// Given an array of integers nums of unique elements. Return all possible subsets (power set) of the array.

// Do not include the duplicates in the answer.

// Input : nums = [1, 2, 3]
// Output : [ [ ] , [1] , [2] , [1, 2] , [3] , [1, 3] , [2, 3] , [1, 2 ,3] ]

// Brute 

class Solution {
    /* Function call to get the
    Power set of given array */
    powerSet(nums) {
        
        // Variable to store size of array
        let n = nums.length;
        
        // To store the answer
        let ans = [];
        
        /* Variable to store the 
        count of total susbsets */
        let count = (1 << n);
        
        // Traverse for every value
        for (let val = 0; val < count; val++) {
            
            // To store the current subset
            let subset = [];
            
            // Traverse on n bits
            for (let i = 0; i < n; i++) {
                if (val & (1 << i)) {
                    subset.push(nums[i]);
                }
            }
            
            /* Add the current subset 
            to final answer */
            ans.push(subset);
        }
        
        // Return stored answer
        return ans;
    }
}