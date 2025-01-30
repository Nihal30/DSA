// Find Nth root of a number

// Given two numbers N and M, find the Nth root of M. The Nth root of a number M is defined as
//  a number X such that when X is raised to the power of N, it equals M. If the Nth root is not an integer, return -1.

// Input: N = 3, M = 27
// Output: 3
// Explanation: The cube root of 27 is equal to 3.

// ls

// class Solution {
//     /* Function to calculate power using
//     exponentiation by squaring method */
//     func(b, exp) {
//         let ans = 1;
//         let base = b;

//         // Exponentiation by squaring method
//         while (exp > 0) {
//             if (exp % 2 === 1) {
//                 exp--;
//                 ans *= base;
//             } else {
//                 exp /= 2;
//                 base *= base;
//             }
//         }
//         return ans;
//     }

//     /* Function to find the nth 
//     root of m using linear search */
//     NthRoot(N, M) {
//         // Linear search on the answer space
//         for (let i = 1; i <= M; i++) {
//             let val = this.func(i, N);

//             /* Check if the computed
//             value is equal to m */
//             if (val === M) {
//                 // Return the root value
//                 return i;
//             } else if (val > M) {
//                 break;
//             }
//         }
//         // Return -1 if no root found
//         return -1;
//     }
// }

// let n = 3, m = 27;

// // Create an object of the Solution class
// let sol = new Solution();

// let ans = sol.NthRoot(n, m);

// // Print the result
// console.log(`The answer is: ${ans}`);

// bs
class Solution {
    /* Helper function to check the power of mid 
    with respect to m Returns: 1 - if mid^n == m,
    0 - if mid^n < m and 2 - if mid^n > m */
    func(mid, n, m) {
        let ans = 1;
        for (let i = 1; i <= n; i++) {
            ans *= mid;
            if (ans > m) return 2;
        }
        if (ans === m) return 1;
        return 0;
    }

    /* Function to find the nth root
    of m using binary search */
    NthRoot(N, M) {
        // Binary search on the answer space
        let low = 1, high = M;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let midN = this.func(mid, N, M);
            if (midN === 1) {
                // Return mid if mid^N == M
                return mid;
            } else if (midN === 0) {
                // Move to the right half if mid^N < M
                low = mid + 1;
            } else {
                // Move to the left half if mid^N > M
                high = mid - 1;
            }
        }
        // Return -1 if no nth root found
        return -1;
    }
}

let n = 3, m = 27;

// Create an object of the Solution class
let sol = new Solution();

let ans = sol.NthRoot(n, m);

// Print the result
console.log(`The answer is: ${ans}`);

