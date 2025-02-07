// Pow(x,n)

// Implement the power function pow(x, n) , which calculates the x raised to n i.e. xn.

// Input : x = 2.0000 , n = 10
// Output : 1024.0000
// Explanation : Answer = 2^10 => 1024.

// brute
class Solution {
    myPow(x, n) {
        // Base case: any number to the power of 0 is 1
        if (n === 0) return 1; 
        // Handle negative exponents
        if (n < 0) { 
            x = 1 / x;
            n = -n;
        }
        let ans = 1;
        for (let i = 0; i < n; i++) {
            // Multiply ans by x n times
            ans *= x; 
        }
        return ans;
    }
}

// Testing the function
let sol = new Solution();
// Output: 1024.0000
console.log(sol.myPow(2.0000, 10)); 
// Output: 0.2500
console.log(sol.myPow(2.0000, -2)); 
