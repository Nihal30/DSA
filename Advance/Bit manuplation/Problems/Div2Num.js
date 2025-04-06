// Divide two numbers without multiplication and division
// Given the two integers, dividend and divisor. Divide without using the mod, division,
//  or multiplication operators and return the quotient.

// The fractional portion of the integer division should be lost as it truncates toward zero.
// As an illustration, 8.345 and -2.7335 would be reduced to 8 and -2 respectively.

// brute

class Solution {
    /* Function to divide two numbers
    without multiplication and division */
    divide(dividend, divisor) {
        
        // Base case
        if (dividend === divisor) return 1;
        if (dividend === -Math.pow(2, 31) && divisor === -1) return Math.pow(2, 31) - 1;
        if (divisor === 1) return dividend;
        
        // Variable to store the sign of result
        let isPositive = true;
        
        // Updating the sign of quotient
        if (dividend >= 0 && divisor < 0) 
            isPositive = false;
        else if (dividend < 0 && divisor > 0)
            isPositive = false;
            
        // Storing absolute dividend & divisor
        let n = Math.abs(dividend);
        let d = Math.abs(divisor);
        
        // Variable to store the answer and sum
        let ans = 0, sum = 0;
        
        /* Looping while sum added to divisor is
        less than or equal to divisor */
        while (sum + d <= n) {
            
            // Increment the count
            ans++;
            // Update the sum
            sum += d;
        }
        
        // Handling overflowing condition
        if (ans > 2147483647 && isPositive) 
            return 2147483647;
        if (ans > 2147483647 && !isPositive)
            return -2147483648;
        
        /* Returning the quotient 
        with proper sign */
        return isPositive ? ans : -1 * ans;
    }
}

// Driver code
let dividend = 10, divisor = 3;

/* Creating an instance of 
Solution class */
let sol = new Solution();

/* Function call to divide two numbers
without multiplication and division */
let ans = sol.divide(dividend, divisor);

console.log(`The result of dividing ${dividend} and ${divisor} is ${ans}`);
