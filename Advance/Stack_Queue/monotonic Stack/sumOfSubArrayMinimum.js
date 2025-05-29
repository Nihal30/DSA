// Sum of Subarray Minimums
// Given an array of integers arr of size n, calculate the sum of the minimum value in each (contiguous) subarray of arr.
//  Since the result may be large, 

// return the answer modulo 109 +7.
// Examples:
// Input: arr = [3, 1, 2, 5]
// Output: 18
// Explanation: The minimum of subarrays:
//  [3], [1], [2], [5], [3, 1], [1, 2], [2, 5], [3, 1, 2], [1, 2, 5], [3, 1, 2, 5] 
//  are 3, 1, 2, 5, 1, 1, 2, 1, 1, 1 respectively and their sum is 18.

class Solution {

   /* Function to find the sum of the 
   minimum value in each subarray */
   sumSubarrayMins(arr) {
       
       // Size of array
       let n = arr.length;
       let mod = 1e9 + 7; // Mod value
       // To store the sum
       let sum = 0;
       // Traverse on the array
       for (let i = 0; i < n; i++) {
           // To store the minimum of subarray
           let mini = arr[i];
           /* Nested loop to get all 
           subarrays starting from index i */
           for (let j = i; j < n; j++) {
               // Update the minimum value
               mini = Math.min(mini, arr[j]);
               // Update the sum
               sum = (sum + mini) % mod;
           }
       }
       
       // Return the computed sum
       return sum;
   }
}

// Main function to test the solution
const arr = [3, 1, 2, 5];

/* Creating an instance of 
Solution class */
const sol = new Solution(); 

/* Function call to find the sum of the 
minimum value in each subarray */
const ans = sol.sumSubarrayMins(arr);

console.log("The sum of minimum value in each subarray is:", ans);
