class Solution {
    factorial(n) {
        // Base case: factorial of 0 or 1 is 1
        if (n <= 1) return 1;
        // Recursive case: N * factorial of N-1
        return n * this.factorial(n - 1);
    }
}

const solution = new Solution();
const N = 5; // Example input
console.log(`Factorial of ${N} is ${solution.factorial(N)}`);

// Dry run
// Steps:
// Initial Call: factorial(5)
// n = 5, so it doesn't satisfy the base case (n <= 1).
// It moves to the recursive case: 5 * factorial(4).
// Recursive Call 1: factorial(4)
// n = 4, so it doesn't satisfy the base case.
// It moves to the recursive case: 4 * factorial(3).
// Recursive Call 2: factorial(3)
// n = 3, so it doesn't satisfy the base case.
// It moves to the recursive case: 3 * factorial(2).
// Recursive Call 3: factorial(2)
// n = 2, so it doesn't satisfy the base case.
// It moves to the recursive case: 2 * factorial(1).
// Recursive Call 4: factorial(1)
// n = 1, so it satisfies the base case (n <= 1).

// It returns 1.
// Unwinding the Stack:
// Now, as the recursive calls start returning, the results are calculated step-by-step:
// Returning from factorial(1):
// factorial(1) returns 1.
// Returning from factorial(2):
// factorial(2) = 2 * factorial(1) = 2 * 1 = 2.
// Returning from factorial(3):
// factorial(3) = 3 * factorial(2) = 3 * 2 = 6.
// Returning from factorial(4):
// factorial(4) = 4 * factorial(3) = 4 * 6 = 24.
// Returning from factorial(5):
// factorial(5) = 5 * factorial(4) = 5 * 24 = 120.
