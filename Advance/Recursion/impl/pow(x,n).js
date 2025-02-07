// Pow(x,n)

// Implement the power function pow(x, n) , which calculates the x raised to n i.e. xn.

// Input : x = 2.0000 , n = 10
// Output : 1024.0000
// Explanation : Answer = 2^10 => 1024.

// // brute
// class Solution {
//     myPow(x, n) {
//         // Base case: any number to the power of 0 is 1
//         if (n === 0) return 1; 
//         // Handle negative exponents
//         if (n < 0) { 
//             x = 1 / x;
//             n = -n;
//         }
//         let ans = 1;
//         for (let i = 0; i < n; i++) {
//             // Multiply ans by x n times
//             ans *= x; 
//         }
//         return ans;
//     }
// }

// // Testing the function
// let sol = new Solution();
// // Output: 1024.0000
// console.log(sol.myPow(2.0000, 10)); 
// // Output: 0.2500
// console.log(sol.myPow(2.0000, -2)); 

// Res

class Solution {
    power(x, n) {
        // Base case: anything raised to 0 is 1
        if (n === 0) return 1.0;
        
        // Base case: anything raised to 1 is itself
        if (n === 1) return x;
        
        // If 'n' is even
        if (n % 2 === 0) {
            // Recursive call: x * x, n / 2
            return this.power(x * x, Math.floor(n / 2));
        }
        
        // If 'n' is odd
        // Recursive call: x * power(x, n - 1)
        return x * this.power(x, n - 1);
    }
    
    myPow(x, n) {
        // If 'n' is negative
        if (n < 0) {
            // Calculate the power of -n and take reciprocal
            return 1.0 / this.power(x, -n);
        }
        
        // If 'n' is non-negative
        return this.power(x, n);
    }
}

// Example usage
const sol = new Solution();
const x = 2.0;
const n = 10;

// Calculate x raised to n
const result = sol.myPow(x, n);

// Print the result
console.log(`${x}^${n} = ${result}`);

