// Power of Four

// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.

// Brute Force Solution
// Keep dividing n by 4 iteratively until n becomes 1.
function isPowerOfFourBrute(n) {
    if (n <= 0) return false;
    while (n % 4 === 0) {
        n /= 4;
    }
    return n === 1;
}

// TC => O(Log n)

// Better Solution (Using Recursion)
// Uses recursion to check if n is a power of 4.
function isPowerOfFourRecursive(n) {
    if (n === 1) return true;
    if (n <= 0 || n % 4 !== 0) return false;
    return isPowerOfFourRecursive(n / 4);
}
