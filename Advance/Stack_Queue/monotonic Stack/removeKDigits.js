// Remove K Digits

// Given a string nums representing a non-negative integer, and an integer k,
//  find the smallest possible integer after removing k digits from num.
// Examples:
// Input: nums = "541892", k = 2
// Output: "1892"
// Explanation: Removing the two digits 5 and 4 yields the smallest number, 1892.

class Solution {
    /* Function to find the smallest possible 
    integer after removing k digits */
    removeKdigits(nums, k) {
        
        let st = []; // Stack
        
        // Traverse on the given string
        for(let i = 0; i < nums.length; i++) {
            
            // Current digit
            let digit = nums[i];
            
            /* Pop last digits (when possible)
            if a smaller digit is found*/
            while(st.length > 0 && k > 0
                  && st[st.length - 1] > digit) {

                st.pop(); // Pop the last digit
                k--; // Decrement K by 1
            }
            
            // Push the current digit
            st.push(digit);
        }
        
        // If more digits can be removed
        while(st.length > 0 && k > 0) {
            
            st.pop(); // Pop the last added digits
            k--; // Decrement K by 1
        }
        
        // Handling edge case
        if(st.length === 0) return "0";
        
        // To store the result
        let res = "";
        
        // Adding digits in stack to result
        while(st.length > 0) {
            res += st.pop();
        }
        
        // Trimming the zeroes at the back
        res = res.replace(/0+$/, '');
        
        // Reverse to get the actual number
        res = res.split('').reverse().join('');
        
        // Edge case
        if(res.length === 0) return "0";
        
        // Return the stored result
        return res;
    }
}

let nums = "541892";
let k = 2;

/* Creating an instance of 
Solution class */
let sol = new Solution(); 

/* Function call to find the smallest 
possible integer after removing k digits */
let ans = sol.removeKdigits(nums, k);

console.log("The smallest possible integer after removing k digits is: " + ans);
