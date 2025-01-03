class Solution {
    /* Function to check if a 
    number is palindrome or not */
    isPalindrome(n) {
        // Create a copy of original number
        let copy = n;
        
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
        
        /* Return true if the reversed and 
        copy of original number is same */
        return revNum === copy;
    }
}

// Input number
let n = 12321;

/* Creating an instance of 
Solution class */
let sol = new Solution();

// Function call to check if n is a palindrome
let ans = sol.isPalindrome(n);

if (ans) {
    console.log("The given number is a palindrome");
} else {
    console.log("The given number is not a palindrome");
}
