// Second highest occurring element

// Given an array of n integers, find the second most frequent element in it.
//  If there are multiple elements that appear a maximum number of times, find the smallest of them.
//  If second most frequent element does not exist return -1.


// brute 

class Solution {
    /* Function to get the second highest 
    occurring element in array */
    secondMostFrequentElement(nums) {
        
        // Variable to store the size of array
        let n = nums.length;
        
        /* Variable to store maximum frequency
        and second Max frequency */
        let maxFreq = 0;
        let secMaxFreq = 0;
        
        /* Variable to store elements with most 
        and second most frequency */
        let maxEle = -1, secEle = -1;
        
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
                if (nums[i] === nums[j]) {
                    freq++;
                    visited[j] = true;
                }
            }
            
            /* Update variables if new element  
            having highest frequency or second
            highest frequency is found */
            if (freq > maxFreq) {
                secMaxFreq = maxFreq;
                maxFreq = freq;
                secEle = maxEle;
                maxEle = nums[i];
            } 
            else if (freq === maxFreq) {
                maxEle = Math.min(maxEle, nums[i]);
            }
            else if (freq > secMaxFreq) {
                secMaxFreq = freq;
                secEle = nums[i];
            }
            else if (freq === secMaxFreq) {
                secEle = Math.min(secEle, nums[i]);
            }
        }
        
        // Return the result
        return secEle;
    }
}

// Example usage
let nums = [4, 4, 5, 5, 6, 7];

/* Creating an instance of 
Solution class */
let sol = new Solution();

/* Function call to get the second
highest occurring element in array */
let ans = sol.secondMostFrequentElement(nums);

console.log("The second highest occurring element in the array is: " + ans);