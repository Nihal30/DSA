// Sum of first N numbers
 // Given an integer N, return the sum of first N natural numbers. Try to solve this using recursion.
//  Input : N = 4
//  Output : 10
//  Explanation : first four natural numbers are 1, 2, 3, 4.
//  Sum is 1 + 2 + 3 + 4 => 10.

// class Solution {
//     NnumbersSum(N) {
//         // Base case: if N is 0, return 0
//         if (N === 0) return 0;
//         // Recursive case: add N to the sum of N-1
//         return N + this.NnumbersSum(N - 1);
//     }
// }

// const solution = new Solution();
// const N = 10; // Example input
// console.log(`Sum of first ${N} numbers is ${solution.NnumbersSum(N)}`);
