// Check if a number is prime or not
// Given an integer num, return true if it is prime otherwise false.
// A prime number is a number that is divisible only by 1 and itself.
// Input : num = 5
// Output : true
// Explanation : The factors of 5 are 1 and 5 only.
// So it satisfies the prime number condition.
class Solution {
    // Method to check if a number is prime
    checkPrime(num) {
        if (num <= 1) {
            return false; 
        }
        // Call the helper function to check for primality
        return this.prime(num, 2);  
    }

    // Helper method to check for primality using recursion
    prime(num, x) {
    // Base case: x > sqrt(num), so the number is prime
        if (x > Math.sqrt(num)) {
            return true;  
        }
        // Found a divisor, so the number is not prime
        if (num % x === 0) {
            return false;  
        }
        // Recursive call with the next divisor
        return this.prime(num, x + 1);  
    }
}

// Main method for testing the checkPrime function
const solution = new Solution();
const num = 7;  
const result = solution.checkPrime(num); 
console.log(result);  
