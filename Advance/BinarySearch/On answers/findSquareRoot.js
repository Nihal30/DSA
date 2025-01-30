// Find square root of a number

// Given a positive integer n. Find and return its square root. If n is not a perfect square, then return the floor value of sqrt(n).

// Input: n = 36
// Output: 6
// Explanation: 6 is the square root of 36.

//  brute linear search 
class Solution {
    /* Function to compute the floor of
       square root of a given integer */
    floorSqrt(n) {
        let ans = 0;
        
        // Linear search in the answer space
        for (let i = 1; i <= n; i++) {
            let val = i * i;
            
            // Check if val is less than or equal to n
            if (val <= n) {
                // Update ans to current value of i
                ans = i; 
            } 
            else {
                break; 
            }
        }
        
        // Return the computed floor of square root
        return ans;
    }
}

// Main function to test the floorSqrt method
let n = 28;

// Create an object of the Solution class
let sol = new Solution();

let ans = sol.floorSqrt(n);

// Print the result
console.log(`The floor of square root of ${n} is: ${ans}`);
