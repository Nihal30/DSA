// Given a string s, representing a large integer, the task is to return the 
// largest-valued odd integer (as a string) that is a substring of the given string s.
// The number returned should not have leading zero's. But the given input string may have leading zero.

// eg -
// Input : s = "5347"
// Output : "5347"
// Explanation : The odd numbers formed by given strings are --> 5, 3, 53, 347, 5347.
// So the largest among all the possible odd numbers for given string is 5347.

class Solution {
    /* Function to find the largest odd number 
    that is a substring of given string */
    largeOddNum(s) {
        let ind = -1;
        
        // Iterate through the string from the end to beginning
        let i;
        for (i = s.length - 1; i >= 0; i--) {
            // Break if an odd digit is found
            if ((s[i] - '0') % 2 === 1) {
                ind = i;
                break;
            }
        }
        
        // Skipping any leading zeroes
        i = 0;
        while (i <= ind && s[i] === '0') i++;
        
        // Return the largest odd number substring
        return s.substring(i, ind + 1);
    }
}

// Driver code
const solution = new Solution();
const num = "504";
const result = solution.largeOddNum(num);
console.log("Largest odd number:", result);
