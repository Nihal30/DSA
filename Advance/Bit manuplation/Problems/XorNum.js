// XOR of numbers in a given range
// Given two integers L and R. Find the XOR of the elements in the range [L , R].
// Input : L = 3 , R = 5
// Output : 2
// Explanation : answer = (3 ^ 4 ^ 5) = 2.

// brute 
class Solution {
    
    /* Function to find the XOR 
    of numbers from L to R */
    findRangeXOR(l, r) {
        
        // To store the XOR of numbers
        let ans = 0;
        
        // XOR all the numbers
        for (let i = l; i <= r; i++) {
            ans ^= i;
        }
        
        // Return the result
        return ans;
    }
}

const main = () => {
    const l = 3, r = 5;
    
    /* Creating an instance of 
    Solution class */
    const sol = new Solution();
    
    /* Function call to get the
    XOR of numbers from L to R */
    const ans = sol.findRangeXOR(l, r);
    
    console.log(`The XOR of numbers from ${l} to ${r} is: ${ans}`);
};

main();
