// Sum of digits in a given number
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Input : num = 529
// Output : 7
// Explanation : In first iteration the digits sum will be = 5 + 2 + 9 => 16
// In second iteration the digits sum will be 1 + 6 => 7.
// Now single digit is remaining , so we return it.

//  recursion
class Solution {
    // Method to compute the digital root of a number
    addDigits(num) {
        // Base case: if the number is a single digit, return it
        if (num < 10) {
            return num;
        }
        
        // Recursive case: sum the digits and continue
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return this.addDigits(sum);
    }
}

// Example usage
const solution = new Solution();

// Example number
const num = 529;

// Call the addDigits method and print the result
const result = solution.addDigits(num);
console.log("Sum of digits:", result);  // Expected output: 7