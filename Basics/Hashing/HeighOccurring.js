// Highest occurring element in an array
// Q
// Given an array of n integers, find the most frequent element in it i.e.,
//  the element that occurs the maximum number of times.
//   If there are multiple elements that appear a maximum number of times,
//    find the smallest of them.

// solution brute 

class Solution {
    /* Function to get the highest 
    occurring element in array nums */
    mostFrequentElement(nums) {
        
        // Variable to store the size of array
        let n = nums.length;
        
        // Variable to store maximum frequency
        let maxFreq = 0; 
        
        /* Variable to store element 
        with maximum frequency */
        let maxEle = 0;
        
        // Visited array
        let visited = new Array(n).fill(false);
        
        // First loop
        for (let i = 0; i < n; i++) {
            // Skip second loop if already visited
            if (visited[i]) continue;
            
            /* Variable to store frequency
            of current element */
            let freq = 0;
            
            // Second loop
            for (let j = i; j < n; j++) {
                if (nums[i] == nums[j]) {
                    freq++;
                    visited[j] = true;
                }
            }
            
            /* Update variables if new element having 
            highest frequency is found */
            if (freq > maxFreq) {
                maxFreq = freq;
                maxEle = nums[i];
            } else if (freq == maxFreq) {
                maxEle = Math.min(maxEle, nums[i]);
            }
        }
        
        // Return the result
        return maxEle;
    }
}

// Input array
let nums = [4, 4, 5, 5, 6];

// Creating an instance of Solution class
let sol = new Solution();

/* Function call to get the
highest occurring element in array nums */
let ans = sol.mostFrequentElement(nums);

console.log("The highest occurring element in the array is: " + ans);

// tc o(n2)
// sc O(n)


