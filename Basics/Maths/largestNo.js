class Solution {
    /* Function to find the largest
    digit in a given number */
    largestDigit(n) {
        // Variable to store the largest digit
        let largestDigit = 0;

        /* Keep on iterating while there
        are digits left to extract */
        while (n > 0) {
            let lastDigit = n % 10;

            /* If the current digit is greater than 
            largest digit, update largest digit */
            if (lastDigit > largestDigit) {
                largestDigit = lastDigit;
            }

            n = Math.floor(n / 10);
        }

        // Return the largest digit
        return largestDigit;
    }
}

const n = 348;

/* Creating an instance of 
Solution class */
const sol = new Solution();

// Function call to find the largest digit in n
const ans = sol.largestDigit(n);

console.log("The largest digit in the number is:", ans);
