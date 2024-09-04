//Question
// You are given an integer n. Return the integer formed by placing the digits of n in reverse order.

// Example 1
// Input: n = 25

// Output: 52

// Explanation: Reverse of 25 is 52.

// Example 2
// Input: n = 123

// Output: 321

// Explanation: Reverse of 123 is 321.

// solution

class Solution {
    // Function to reverse given number n
    reverseNumber(n) {
        /* After the code, revNum will
        contain the reversed number */
        let revNum = 0;
        
        /* Keep on iterating while there
        are digits left to extract */
        while (n > 0) {
            let lastDigit = n % 10;
            
            /* Pushing last digit at the
            back of reversed number */
            revNum = (revNum * 10) + lastDigit;
            n = Math.floor(n / 10);
        }
        
        return revNum;
    }
}

const n = 6678;

/* Creating an instance of 
Solution class */
const sol = new Solution();

// Function call to reverse the digits in n
const ans = sol.reverseNumber(n);
console.log("The reverse of given number is:", ans); // 8766

