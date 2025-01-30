// Find Nth root of a number

// Given two numbers N and M, find the Nth root of M. The Nth root of a number M is defined as
//  a number X such that when X is raised to the power of N, it equals M. If the Nth root is not an integer, return -1.

// Input: N = 3, M = 27
// Output: 3
// Explanation: The cube root of 27 is equal to 3.

// ls

class Solution {
    /* Function to calculate power using
    exponentiation by squaring method */
    func(b, exp) {
        let ans = 1;
        let base = b;

        // Exponentiation by squaring method
        while (exp > 0) {
            if (exp % 2 === 1) {
                exp--;
                ans *= base;
            } else {
                exp /= 2;
                base *= base;
            }
        }
        return ans;
    }

    /* Function to find the nth 
    root of m using linear search */
    NthRoot(N, M) {
        // Linear search on the answer space
        for (let i = 1; i <= M; i++) {
            let val = this.func(i, N);

            /* Check if the computed
            value is equal to m */
            if (val === M) {
                // Return the root value
                return i;
            } else if (val > M) {
                break;
            }
        }
        // Return -1 if no root found
        return -1;
    }
}

let n = 3, m = 27;

// Create an object of the Solution class
let sol = new Solution();

let ans = sol.NthRoot(n, m);

// Print the result
console.log(`The answer is: ${ans}`);
