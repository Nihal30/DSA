// Sliding Window Maximum
// Given an array of integers arr, there is a sliding window of size k which is moving from the very left of the array to the very right.
//  You can only see the k numbers in the window. Each time the sliding window moves right by one position. 
//  Return the max sliding window.


// Examples:
// Input: arr = [4, 0, -1, 3, 5, 3, 6, 8], k = 3
// Output: [4, 3, 5, 5, 6, 8]
// Explanation: 



// Window position          Max

// ------------------------     -----

// [4 0 -1] 3 5 3 6 8      4
//  4 [0 -1 3] 5 3 6 8      3
//  4 0 [-1 3 5] 3 6 8      5
//  4 0 -1 [3 5 3] 6 8      5
//  4 0 -1 3 [5 3 6] 8      6
//  4 0 -1 3 5 [3 6 8]     8

// For each window of size k=3, we find the maximum element in the window and add it to our output array.

// brute 
class Solution {
    // Function to get the maximum sliding window
    maxSlidingWindow(arr, k) {
        
        let n = arr.length; // Size of array
        
        // To store the answer
        let ans = [];
        
        /* Traverse on the arrary 
        for valid window */
        for(let i = 0; i <= n - k; i++) {
            
            // To store the maximum of the window
            let maxi = arr[i];
            
            // Traverse the window
            for(let j = i; j < i + k; j++) {
                // Update the maximum
                maxi = Math.max(maxi, arr[j]);
            }
            
            // Add the maximum to the result
            ans.push(maxi);
        }
        
        // Return the stored result
        return ans;
    }
}

let arr = [4, 0, -1, 3, 5, 3, 6, 8];
let k = 3;

/* Creating an instance of 
Solution class */
let sol = new Solution();

/* Function call to get the
maximum sliding window */
let ans = sol.maxSlidingWindow(arr, k);

console.log("The maximum elements in the sliding window are: ");
for(let num of ans) {
    console.log(num + " ");
}
